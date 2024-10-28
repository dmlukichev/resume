// use this:  https://jsonresume.org/schema

import { Education, Job } from '../experience/types'

export const RESUME_DATA = {
    footerSpacing: '37rem',
    brief: `
        <p>
          Experienced Software Engineer and Architect with over a decade of expertise in designing and
          building scalable, high-performance systems. Skilled in leading teams, optimizing software
          architecture, and implementing robust, maintainable code across diverse platforms.
        </p>
        <p>
          Proven track record of delivering complex projects from concept to deployment with a focus on
          efficiency, security, and long-term sustainability.
        </p>
    `,
    personal: {
        address: 'Podgorica, Montenegro',
        phone: '+382 67 13 98 55',
        email: 'dmlukichev@gmail.com',
        dateOfBirth: '1987-08-09',
        social: {
            telegram: `@dmlukichev`,
            linkedin: '~/dmlukichev',
            github: '~/dmlukichev',
            so: '~/users/851290',
        }
    },
    skills: [
        { name: 'TypeScript', value: 10 },
        { name: 'Rust', value: 6 },
        { name: 'Javascript', value: 10 },
        { name: 'PHP', value: 5 },
        { name: 'Python', value: 4 },
        { name: 'Postgres', value: 9 },
        { name: 'MariaDb/Mysql', value: 7 },
        { name: 'Mongo', value: 6 },
        { name: 'Angular', value: 10 },
        { name: 'React', value: 6 },
        { name: 'NodeJS/Deno', value: 10 },
        { name: 'NestJS', value: 10 },
        { name: 'Axum/Tower', value: 6 },
        { name: 'Kubernetus', value: 7 },
    ],
    languages: [
        { name: 'Русский', value: 10 },
        { name: 'English', value: 8 },
        { name: 'Srpski', value: 4 },
    ],
    jobs: [
        {
            company: 'LepotaTech',
            site: 'https://lepota.tech/',
            role: 'Consultant',
            employment: 'Contract',
            dates: ['Apr 2024', 'Sep 2024'],
            techs: [
                ['Rust', 'primary'],
                ['Typescript', 'secondary'],
                ['Axum', 'primary'],
                ['SeaORM', 'primary'],
                ['Postgres', 'primary'],
                ['PostGIS', 'secondary'],
                ['pgRouting', 'secondary'],
                ['OSM', 'secondary'],
                ['Docker', 'secondary'],
            ],
            description:`
<p class="company">
    The company develops self-hosted solutions for logistics automation.
</p>
<p>
    My task was to develop a microservice that processes events occurring during
    the delivery process in real time. To achieve this, the following was done:
</p>
<ul>
    <li>
    Designed a data schema based on PostgreSQL + PostGIS + pgRouting
    </li>
    <li>
    Developed a lightweight API for receiving device location data, with the
    ability to expand the list of supported devices dynamically (dynamic payload
    mapping), using Axum + SeaORM
    </li>
    <li>
    Implemented real-time event streaming using sockets
    </li>
    <li>
    Covered the code with integration and unit tests where necessary
    </li>
    <li>
    Assisted with integrating the solution into the existing codebase
    </li>
</ul>
<p>
    The project was delivered on schedule, despite minor changes in the
    technical requirements.
</p>
`
        },
        {
            company: 'Documo',
            site: 'https://documo.com/',
            role: 'System Architect',
            employment: 'Full-time',
            dates: ['Jan 2022', 'Mar 2024'],
            techs: [
                ['Typescript', 'primary'],
                ['Angular', 'primary'],
                ['NestJS', 'primary'],
                ['mysql', 'primary'],
                ['Postgres', 'primary'],
                ['Sequelize', 'secondary'],
                ['Typeorm', 'primary'],
                ['Redis', 'secondary'],
                ['Kafka', 'secondary'],
                ['Docker', 'secondary'],
                ['Kubernetus', 'primary'],
                ['GCP', 'secondary'],
            ],
            description: `
<p class="company">The company is developing a cloud solution for handling faxes.</p>
<p>
When I joined, the company faced two key challenges that needed to be addressed:
poor infrastructure scalability and unpredictable development speed due to high
code coupling.
</p>

<p style="margin-bottom: 0">I initiated the following actions:</p>
<ul style="margin-top:0">
    <li>migration of the codebase to TypeScript with strict interface declarations</li>
    <li>separation of key processes into independent microservices where possible</li>
    <li>refactoring the codebase by moving from Express to modular NestJS</li>
</ul>
<p style="margin-bottom: 0">During the project, I focused on the following tasks:</p>
<ul  style="margin-top:0">
    <li>
    coordinated collaboration between two development teams to maintain a unified
    direction
    </li>
    <li>
    ensured module boundaries were respected within their respective areas of
    responsibility
    </li>
    <li>
    monitored code quality (both during typical code reviews and while planning
    major epics), addressing complex challenges through pair programming sessions
    </li>
    <li>
    took on the most complex development tasks, delegating them progressively
    as intermediate results were achieved
    </li>
    <li>
    due to the shift from a monolithic architecture to a modular monolith + microservices
    setup, completely reworked the CI/CD system, accelerating the deployment
    process through effective caching
    </li>
</ul>
<p>
Although not all initiatives were implemented by the time I left, what was
implemented significantly improved release stability and made development more
predictable.
</p>

            `,
        },
        {
            company: 'DataArt',
            site: 'https://dataart.team/',
            role: 'Team Lead',
            employment: 'Full-time',
            dates: ['Feb 2021', 'Jan 2022'],
            techs: [
                ['Angular', 'primary'],
                ['Typescript', 'primary'],
            ],
            printSpacer: '9.25rem',
            description: `
<p class="company">IT-outsourcing company</p>
<p>
I can't disclose the details due to the signed NDA.
</p>
`
        },
        {
            company: 'Skyeng',
            site: 'https://skyeng.ru/',
            role: 'Senior Software Developer',
            employment: 'Full-time',
            dates: ['Oct 2020', 'Feb 2021'],
            techs: [
                ['Typescript', 'primary'],
                ['Angular', 'primary'],
                ['WebRTC', 'primary'],
                ['janus', 'primary'],
                ['ElasticSearch', 'secondary'],
                ['LogStash', 'secondary'],
                ['Grafana', 'primary'],
            ],
            description: `
<p class="company">Online English language school</p>
<p>
Maintained and developed the client-side component of a WebRTC-based video calling module
</p>
<p style="margin-bottom: 0;">Example tasks that I had to perform:</p>
<ul style="margin-top: 0;">
<li>
collecting logs and analytics from client devices
</li>
<li>
analyzing and troubleshooting issues escalated from second-line technical support
</li>
<li>
making minor adjustments to the client interface
</li>
<li>
helping and supporting other teams when they encountered difficulties integrating the module
</li>
</ul>
`
        },
        {
            company: 'Payever',
            site: 'https://getpayever.com/',
            role: 'Tech Lead',
            employment: 'Full-time',
            dates: ['Apr 2019', 'Aug 2020'],
            techs: [
                ['Angular', 'primary'],
                ['Typescript', 'primary'],
                ['NestJS', 'secondary'],
                ['Mongo', 'secondary'],
                ['Cypress', 'secondary']
            ],
            description: `
<p class="company">
The company develops e-commerce solutions for small-to-medium businesses
</p>
<p>
My goal was to develop a new version of a visual website builder (similar to Wix,
WebFlow, or Tilda) to replace the previous proof of concept, which wasn't
able to do what it's supposed to do and would crash under after any meaningful usage
load.
</p>
<p style="margin-bottom: 0">
The key problem areas of the previous version were the following:
</p>
<ul style="margin-top: 0">
<li>
global change detection that triggered re-rendering of all application parts
in response to every interaction
</li>
<li>
inefficient client-server communication (the entire editor state was sent
to the server after each action)
</li>
<li>
high coupling between interactions that created conflicts
</li>
</ul>
<p style="margin-bottom: 0">
Taking all this into account, I've built a proof-of-concept with following ideas
in mind:
</p>
<ul>
<li>
there should be an object model (similar to the virtual DOM), where the objects
would be the result elements (blocks, sections, product, etc.), not HTML elements
</li>
<li>
a rendering module that transforms this virtual DOM based on the context passed
to it should be an independent model working outside the framework (in pure
JavaScript).
</li>
<li>
any interaction should not modify the state directly, but generate an action,
which, after the corresponding reducer, will produce a new state
(<i>stateNew=reducer(stateOld, action)</i>)
</li>
<li>
any editor's behavior (insert, drag-n-drop, resize, etc...) should be optional
and easily disabled. Ideally, it should be an RxJS flow that returns either
a modifying action or a new editor context at the output
</li>
</ul>
<p>
These key ideas turned out to be correct, and the PoC I've developed, after
involving other developers, was successfully turned into a working MVP within
a year
</p>
<p>
This project was one of the most challenging in my career, and thanks to it, I
grew tremendously as a professional. Unfortunately, I had to leave it due to
the work-life balance not meeting my expectations (for context: the company's
rating on GlassDoor is 3.3).
</p>
`
        },
        {
            company: 'Dashnex',
            site: 'https://dashnex.com/',
            role: 'Senior Frontend Developer',
            employment: 'Contract',
            dates: ['Aug 2017', 'Mar 2018'],
            techs: [
                ['Typescript', 'primary'],
                ['Angular', 'primary'],
                ['PHP', 'primary'],
                ['Symfony', 'primary'],
                ['Bootstrap', 'secondary'],
                ['Mysql', 'secondary'],
                ['Docker', 'secondary'],
            ],
            description: `
<p class="company">
The company was developing a platform for hosting personal pages based on
customizable, pre-defined templates.
</p>
<p>
My team's task was to migrate code responsible for rendering of client pages
from AngularJS to Angular (version 4 at that time) and add server-side rendering.
</p>
<p style="margin-bottom: 0">
The main challenges were:
</p>
<ul style="margin-top: 0">
<li>
the legacy codebase was a chaotic mix of server-generated fragments of HTML+JS, with even some dynamically rendered CSS
</li>
<li>
many of the necessary API endpoints for data retrieval hadn’t been implemented
</li>
<li>
there was a complete lack of integration tests
</li>
<li>
angular SSR wasn’t yet part of the framework; it was just a third-party library with rather poor documentation
</li>
</ul>

<p style="margin-bottom: 0">
The project was successfully completed, resulting in several key outcomes:
</p>
<ul style="margin-top: 0">
<li>
at least a basic set of integration tests was introduced
</li>
<li>
although this refactoring was huge, the migration was seamless for users
</li>
<li>
the page’s First Contentful Paint (FCP) dropped from 3 seconds to 400ms
(90th percentile)</li>
<li>
client size was reduced from ~3MB to 800KB
</li>
<li>
we became one of the first products to use SSR in production
</li>
</ul>
<div class="print-spacer" style="height: .5rem"></div>

<p>
Through this project and the need to dig into the source code to solve emerging issues, I gained a deep understanding of how Angular works "under the hood."
</p>
`
        },
        {
            company: 'SnapCart',
            site: 'https://snapcart.global/',
            role: 'Frontend Developer',
            employment: 'Full-time',
            dates: ['Apr 2018', 'Feb 2019'],
            techs: [
                ['React', 'primary'],
                ['Redux', 'primary'],
                ['Redux-Saga', 'secondary'],
                ['React-Admin', 'primary'],
                ['MaterialUI', 'secondary'],
                ['Formik', 'primary'],
                ['Jestjs', 'secondary'],
                ['Typescript', 'primary'],
                ['PHP', 'secondary'],
                ['Symfony', 'secondary'],
            ],
            description: `
<p class="company">
The company was collecting analytics on purchases by scanning receipts.
</p>

<p>
Our team’s task was to develop and maintain a system for manually entering data
from receipts that failed OCR.
</p>

<p style="margin-bottom: 0">
My responsibilities were:
</p>

<ul style="margin-top: 0">
<li>
implementing interfaces within the React Admin framework
</li>
<li>
collaborating with the backend team to clarify data on existing endpoints and/or
request new ones
</li>
<li>
customizing Material-UI elements according to the company’s brand guidelines and
developing elements not covered in those guidelines
</li>
<li>
reviewing colleagues' code and writing tests
</li>
</ul>

<p>
The project was completed and launched, but was later discontinued as the company
didn’t secure the next round of funding.
</p>
`
        },
        {
            company: 'MM.LaFleur',
            site: 'https://mmlafleur.com/',
            role: 'Consultant',
            employment: 'Contract',
            dates: ['Oct 2016', 'May 2017'],
            techs: [
                ['Typescript', 'primary'],
                ['NodeJS', 'primary'],
                ['Angular', 'secondary'],
                ['Postgres', 'primary'],
                ['SequelizeJS', 'primary'],
                ['HAPI', 'primary'],
                ['Python', 'secondary'],
            ],
            description: `
<p class="company">
The company provided personalized styling services to make it easier for clients to select workwear.
</p>

<p>
I was hired on UpWork to develop an anti-fraud solution.
</p>

<p style="margin-bottom: 0">
The system I developed performed the following:
</p>
<ul>
<li>
regularly extracted data on all orders and their statuses from a Magento
MySQL database
</li>
<li>
retrieved shipment statuses via API or by scraping data from UPS, USPS, and
ShipStation
</li>
<li>
flagged orders as normal or suspicious based on defined criteria
</li>
<li>
offered a minimalist interface in Angular + Material for handling suspicious
orders
</li>
</ul>

<p>
The system was completed, launched, and successfully integrated into the
company’s business processes.
</p>
`
        },
    ] satisfies Job[],
    education: {
        institution: 'Tambov State Technical University',
        url: 'http://www.tstu.ru/',
        area: 'Applied Informatics in Economics',
        studyType: 'Specialist',
        dates: ['Sep 2004', 'Jun 2010'],
    } satisfies Education,
}
