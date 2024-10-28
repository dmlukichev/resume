import {
    TuiAppearance,
    TuiButton,
    tuiButtonOptionsProvider,
    TuiGroup,
    TuiIcon,
    TuiLink,
    TuiRoot,
    tuiScrollbarOptionsProvider,
    TuiTitle
} from '@taiga-ui/core'
import { Component, computed, inject } from '@angular/core'
import { CommonModule, DOCUMENT } from '@angular/common'
import {
    TuiAccordion,
    TuiAccordionItem,
    TuiAccordionItemEagerContent,
    TuiChip,
    tuiChipOptionsProvider
} from '@taiga-ui/kit'
import { RESUME_DATA as ru } from '../_data/ru'
import { RESUME_DATA as en } from '../_data/en'
import { PersonalComponent } from '../personal/personal.component'
import { SkillsComponent } from '../skills/skills.component'
import { EducationComponent } from '../experience/education.component'
import { ExperienceComponent, SafeHtmlPipe } from '../experience/experience.component'
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout'
import { THEME$ } from './theme.provider'
import { LANG$ } from './lang.provider'
import { Job } from '../experience/types'
import { WA_WINDOW } from '@ng-web-apis/common'
import { fromEvent, map, merge, of, startWith, tap } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

const RESUME_DATA = { en, ru }

@Component({
    standalone: true,
    selector: 'resume',
    templateUrl: 'root.component.html',
    styleUrl: 'root.component.scss',
    imports: [
        CommonModule,
        TuiRoot,
        TuiIcon,
        TuiChip,
        TuiAccordion,
        TuiLink,
        TuiAccordionItemEagerContent,
        PersonalComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        TuiCardLarge,
        TuiAppearance,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiGroup,
        SafeHtmlPipe,
        TuiAccordionItem,
    ],
    providers: [
        tuiChipOptionsProvider({ size: 'xs' }),
        tuiScrollbarOptionsProvider({ mode: 'native' }),
        tuiButtonOptionsProvider({ size: 's' })
    ]
})
export class RootComponent {
    window = inject(WA_WINDOW)
    document = inject(DOCUMENT)
    theme$ = inject(THEME$)
    lang$ = inject(LANG$)

    mql = this.window.matchMedia('screen')

    media$ = merge(
        of(this.mql.matches),
        fromEvent(this.mql, 'change').pipe(
            map((event: MediaQueryListEvent) => event.matches)
        ),
    ).pipe(
        map((val) => val ? 'screen' : 'print'),
    )

    avatarUrl = this.document.baseURI + 'assets/avatar-small.jpg'

    media = toSignal(this.media$, { requireSync: true })


    lang = this.lang$.toSignal()

    data = computed(() => RESUME_DATA[this.lang()])

    skills = computed(() => this.data().skills)
    languages = computed(() => this.data().languages)
    jobs = computed<Job[]>(() => this.data().jobs)
    education = computed(() => this.data().education)
}
