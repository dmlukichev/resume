import { Component, computed, inject } from '@angular/core'
import { TuiIcon, TuiLink } from '@taiga-ui/core'
import { RootComponent } from '../_root/root.component'
import { DOCUMENT } from '@angular/common'

@Component({
    standalone: true,
    selector: 'resume-personal',
    templateUrl: 'personal.component.html',
    styleUrl: 'personal.component.scss',
    imports: [
        TuiIcon,
        TuiLink
    ],
})
export class PersonalComponent {
    document = inject(DOCUMENT)
    root = inject(RootComponent)

    ngOnInit() {

    }

    data = computed(() => this.root.data().personal)

    makePhoneHref = (input: string) => 'tel:' + input.replace(/ /gi, '')

    socials = {
        telegram: {
            icon: this.document.baseURI + 'assets/icons/tg.svg',
            makeLink: (i: string) => 'https://t.me/' + i.replace('@', '')
        },
        github: {
            icon: '@tui.github',
            makeLink: (i: string) => 'https://github.com/' + i.replace('~/', '')
        },
        so: {
            icon: this.document.baseURI + 'assets/icons/so.svg',
            makeLink: (i: string) => 'https://stackoverflow.com/' + i.replace('~/', '')
        },
        linkedin: {
            icon: '@tui.linkedin',
            makeLink: (i: string) => 'https://linkedin.com/in/' + i.replace('~/', '')
        },
    }
}
