import { Component, inject, input, Pipe, PipeTransform } from '@angular/core'
import { Job } from './types'
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout'
import { TuiAppearance, TuiButton, TuiGroup, TuiIcon, TuiLink, TuiTitle } from '@taiga-ui/core'
import { TuiAvatar, TuiChip } from '@taiga-ui/kit'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({ standalone: true, name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value)
    }
}

@Component({
    standalone: true,
    selector: 'experience',
    templateUrl: 'experience.component.html',
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
        TuiChip,
        TuiIcon,
        TuiLink,
        SafeHtmlPipe
    ]
})
export class ExperienceComponent {
    constructor() {
        inject(TuiCardLarge).space = 'compact'
        inject(TuiAppearance).appearance.set('floating')
    }

    job = input.required<Job>()

    prettyLink = (str: string) => str
        .replace('https://', '')
        .replace(/\/$/gi, '')

    isArray = (val: unknown): val is string[] => Array.isArray(val)

    asString = (val: unknown): string => {
        if (typeof val !== 'string') {
            throw new Error('Invalid conversion')
        }
        return val
    }
}

