import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideExperimentalZonelessChangeDetection } from '@angular/core'

import { bootstrapApplication } from '@angular/platform-browser'
import { RootComponent } from './_root/root.component'
import { provideTheming } from './_root/theme.provider'
import { provideLang } from './_root/lang.provider'

bootstrapApplication(RootComponent, {
    providers: [
        provideAnimations(),
        provideExperimentalZonelessChangeDetection(),
        provideTheming(),
        provideLang(),
        NG_EVENT_PLUGINS
    ]
}).catch(console.error)
