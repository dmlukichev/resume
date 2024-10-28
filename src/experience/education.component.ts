import { Component, inject, input } from '@angular/core'
import { Education, Job } from './types'
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout'
import { TuiAppearance, TuiButton, TuiGroup, TuiTitle } from '@taiga-ui/core'
import { TuiAvatar, TuiChip } from '@taiga-ui/kit'

@Component({
    standalone: true,
    selector: 'education',
    templateUrl: 'education.component.html',
    styleUrl: 'shared.scss',
    hostDirectives: [
        TuiCardLarge,
        TuiAppearance,
    ],
    imports: [
        TuiTitle,
        TuiHeader,
        TuiAvatar,
        TuiGroup,
        TuiButton,
        TuiChip
    ]
})
export class EducationComponent {
    constructor() {
        inject(TuiCardLarge).space = 'compact'
        inject(TuiAppearance).appearance.set('floating')
    }

    education = input.required<Education>()
}
