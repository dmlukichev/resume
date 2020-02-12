import { Component } from '@angular/core';
import { range } from 'lodash';
import {
  faPhoneSquare as phoneIcon,
  faEnvelope as emailIcon,
  faMapMarkedAlt as addressIcon,
  faCalendar as calendarIcon,
  faLink as linkIcon,
  faUsers as usersIcon
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
  range = range;

  icons = {
    phoneIcon, emailIcon, addressIcon, calendarIcon,
    githubIcon, linkedinIcon, stackOverflowIcon,
    linkIcon, usersIcon,
  };

  skills = [
    { name: 'Javascript', value: 10 },
    { name: 'TypeScript', value: 9 },
    { name: 'PHP', value: 7 },
    { name: 'Python', value: 5 },
    { name: 'SQL', value: 8 },
    { name: 'Mongo', value: 7 },
    { name: 'Angular', value: 10 },
    { name: 'NodeJS', value: 10 },
    { name: 'React', value: 9 },
    { name: 'HAPI', value: 6 },
    { name: 'NestJS', value: 8 },
  ];

  languages = [
    { name: 'English', value: 8 },
    { name: 'Russian', value: 10 },
  ];
}
