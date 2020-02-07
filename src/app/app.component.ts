import { Component } from '@angular/core';
import * as faker from 'faker';
import {
  faPhoneSquare as phoneIcon,
  faEnvelope as emailIcon,
  faMapMarkedAlt as addressIcon,
  faCalendar as calendarIcon,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub as githubIcon,
  faLinkedin as linkedinIcon,
  faStackOverflow as stackOverflowIcon
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icons = {
    phoneIcon, emailIcon, addressIcon, calendarIcon,
    githubIcon, linkedinIcon, stackOverflowIcon
  };

  skills = [
    { name: 'Javascript', value: 10 },
    { name: 'TypeScript', value: 9 },
    { name: 'PHP', value: 7 },
    { name: 'Python', value: 6 },
    { name: 'SQL', value: 8 },
    { name: 'Angular', value: 10 },
    { name: 'NodeJS', value: 9 },
    { name: 'React', value: 9 },
    { name: 'HAPI', value: 6 },
    { name: 'NestJS', value: 8 },
  ];

  languages = [
    { name: 'English', value: 8 },
    { name: 'Russian', value: 10 },
  ];
}
