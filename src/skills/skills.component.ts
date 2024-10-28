import { Component, computed, input } from '@angular/core'
import { JsonPipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TuiRating } from '@taiga-ui/kit'
import { PolymorpheusContent } from '@taiga-ui/polymorpheus'
import { TuiContext } from '@taiga-ui/cdk'
import { RESUME_DATA } from '../_data/ru'

@Component({
    standalone: true,
    selector: 'resume-skills',
    templateUrl: 'skills.component.html',
    styleUrl: 'skills.component.scss',
    imports: [
        JsonPipe,
        TuiRating,
        FormsModule
    ]
})
export class SkillsComponent {
    area = input.required<'skills'|'languages'>()

    data = computed(() => RESUME_DATA[this.area()])

    icon: (val: number) => PolymorpheusContent<TuiContext<number>> = (val) => ({$implicit}) => {
        return '@tui.circle-' + ($implicit <= val ? 'plus' : 'minus')
    };
}
