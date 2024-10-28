import { BehaviorSubject, filter, Observable } from 'rxjs'
import {
    APP_INITIALIZER,
    inject,
    InjectionToken,
    makeEnvironmentProviders,
    Signal
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { WA_LOCAL_STORAGE } from '@ng-web-apis/common'

const Init = Symbol('initTheme')

export type Theme = 'dark'|'light'

export type Theme$ = Observable<'dark'|'light'> & {
    [Init]: () => Promise<void>
    toSignal: () => Signal<Theme>
    toggle: () => void
}

function themeStateFactory(): Theme$ {
    const state$ = new BehaviorSubject<null|Theme>(null)
    const storageKey = 'theme'

    const storage = inject(WA_LOCAL_STORAGE)

    async function _init() {
        const stored = (storage.getItem('theme') as Theme|null)
        const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        state$.next(stored || preferred)
    }

    function toggle() {
        state$.next(state$.value === 'light' ? 'dark' : 'light')
        storage.setItem(storageKey, state$.value)
    }

    const nonNullState$ = state$.pipe(filter(Boolean))

    return Object.assign(
        nonNullState$,
        {
                [Init]: _init,
                toSignal: () => toSignal<Theme>(nonNullState$, { requireSync: true }),
                toggle,
            }
    )
}

export const THEME$ = new InjectionToken<Theme$>('theme')

export const provideTheming = () => makeEnvironmentProviders([
    {
        provide: THEME$,
        useFactory: themeStateFactory,
    },
    {
        provide: APP_INITIALIZER,
        multi: true,
        deps: [THEME$],
        useFactory: (theme$: Theme$) => theme$[Init],
    },
])
