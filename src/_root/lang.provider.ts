import { BehaviorSubject, filter, fromEvent, map, Observable, startWith } from 'rxjs'
import {
    APP_INITIALIZER,
    inject,
    InjectionToken,
    makeEnvironmentProviders,
    Signal
} from '@angular/core'
import { WA_NAVIGATOR, WA_WINDOW } from '@ng-web-apis/common'
import { toSignal } from '@angular/core/rxjs-interop'

const Init = Symbol('initLang')

export type Lang = 'en' | 'ru'

export type Lang$ = Observable<Lang> & {
    [Init]: () => Promise<void>
    toSignal: () => Signal<Lang>
    setLang: (l: Lang) => void
}

function langStateFactory(): Lang$ {
    const state$ = new BehaviorSubject<Lang|null>(null)
    const window = inject(WA_WINDOW)
    const navigator = inject(WA_NAVIGATOR)

    async function _init() {
        const fromNavigator: Lang = navigator.languages.includes('ru') ? 'ru' : 'en'
        window.addEventListener("popstate", (event) => {
            console.log(
                `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
            );
        })
        fromEvent(window, 'popstate').pipe(
            startWith(null),
            // extract lang
            map(() => {
                const url = new URL(window.location.href);
                return url.searchParams.get('lang') as string|Lang|null
            }),
            // handle unsupported lang
            map((lang) => {
                if (!lang || ['ru', 'en'].includes(lang)) {
                    return  lang
                }
                const url = new URL(window.location.href)
                url.searchParams.delete('lang')
                window.history.replaceState(null, '', url.toString())
                return null
            }),
            // populate with users default
            map((lang) => lang || fromNavigator)
        ).subscribe(state$)
    }

    function setLang(l: Lang) {
        const url = new URL(window.location.href)
        url.searchParams.set('lang', l)
        window.history.pushState(null, '', url.toString())
        state$.next(l)
    }

    const nonNullState$ = state$.pipe(filter(Boolean))

    return Object.assign(
        nonNullState$,
        {
            [Init]: _init,
            toSignal: () => toSignal<Lang>(nonNullState$, { requireSync: true }),
            setLang,
        }
    )
}

export const LANG$ = new InjectionToken<Lang$>('lang')

export const provideLang = () => makeEnvironmentProviders([
    {
        provide: LANG$,
        useFactory: langStateFactory,
    },
    {
        provide: APP_INITIALIZER,
        multi: true,
        deps: [LANG$],
        useFactory: (lang: Lang$) => lang[Init],
    }
])
