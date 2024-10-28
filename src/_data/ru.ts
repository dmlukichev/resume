// use this:  https://jsonresume.org/schema

import { Education, Job } from '../experience/types'

export const RESUME_DATA = {
    footerSpacing: '16.5rem',
    brief: `
        <p>
        Опытный инженер-программист и архитектор с более чем десятилетним опытом
        проектирования и разработки масштабируемых, высокопроизводительных систем.
        Обладаю навыками руководства командой, оптимизации архитектуры программного
        обеспечения и внедрения надежного, поддерживаемого кода на различных
        платформах.
        </p>

        <p>
        Имею подтвержденный опыт успешной реализации сложных проектов от концепции
        до развертывания с акцентом на эффективность, безопасность и долгосрочную
        устойчивость.
        </p>
    `,
    personal: {
        address: 'Подгорица, Черногория',
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
            description: `
<p class="company">
    Компания разрабатывает self-hosted решения для автоматизации логистики.
</p>
<p>
    Моей задачей была разработка микросервиса, обрабатывающего события, происходящие
    в процессе доставки в real time. Для этого было сделано:
</p>
<ul>
    <li>Спроектировал схему данных на базе postgres + PostGIS + pgRouting</li>
    <li>
    Реализовал легковесное API для получения позиции c устройств c возможностью
    расширять список поддерживаемых устройств на лету (dynamic payload mapping)
    на базе Axum + SeaORM
    </li>
    <li>Реализовал real time стримминг событий с использованием сокетов</li>
    <li>Покрыл код интеграционными и юнит-тестами (там где было необходимо)</li>
    <li>Помог с интеграцией решения в имеющуюся кодовую базу</li>
</ul>
<p>
    Проект был сдан с соблюдением оговоренных сроков даже несмотря на незначительные изменения
    в техническом задании.
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
<p class="company">Компания разрабатывает облачное решение для работы с факсами.</p>
<p>
В момент, когда я присоединился, у компании было две ключевые проблемы, которые
предстояло решить: плохой скейлинг инфраструктуры и непредсказуемая скорость
разработки из-за высокой связности кода.
</p>
<p style="margin-bottom: 0">Мной было инициировано следующее:</p>
<ul style="margin-top:0">
    <li>перевод кодовой базы на typescript со строгой декларацией интерфейсов</li>
    <li>вынос ключевых процессов в независимые микросервисы, где это возможно</li>
    <li>рефакторинг кодовой базы c уходом от express на модульный NestJs</li>
</ul>
<p style="margin-bottom: 0">В процессе работы занимался следующим:</p>
<ul  style="margin-top:0">
    <li>
    координировал взаимодействие двух команд разработки для сохранения общего
    вектора развития
    </li>
    <li>контролировал соблюдение границ модулей в рамках их зоны ответственности</li>
    <li>
    контролировал качество кода (как при типичном code review, так и в моменты
    планирования крупных эпиков), прорабатывал сложности во время pair coding
    сессий
    </li>
    <li>
    брал на себя наиболее сложные аспекты разработки с последующим делегированием
    по мере достижения промежуточного результата
    </li>
    <li>
    ввиду перехода с монолитной архитектуры на связку модульный монолита + микросервисы,
    полностью переработал CI/CD систему, ускорив при этом процесс деплоя за счет
    грамотного и эффективного кеширования
    </li>
</ul>
<p>
Несмотря на то, что не все инициативы к моменту моего ухода были реализованы, то,
что было реализовано, значительно повысило стабильность релизов и улучшило
предсказуемость разработки.
</p>
            `,
            printSpacer: '9.5rem',
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
            description: `
<p class="company">IT-аутсорсер</p>
<p>
Детали не могу разглашать ввиду подписанного NDA.
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
<p class="company">Онлайн-школа английского языка</p>
<p>
Занимались поддержкой и разработкой клиентской части модуля видеозвонков на базе WebRTC
</p>
<p style="margin-bottom: 0;">Примерные задачи, который приходилось выполнять:</p>
<ul style="margin-top: 0;">
<li>сбор логов и аналитической информации с клиентских устройств</li>
<li>анализ и разбор проблемных ситуаций, поступивших со второй линии техподдержки</li>
<li>внесение незначительных правок в интерфейс клиента</li>
<li>помощь и поддержка соседних команд в случае возникновения сложностей с подключением модуля</li>
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
Компания занимается разработкой e-commerce решений для малого бизнеса
</p>
<p>
Моей задачей была разработка новой версии визуального конструктора сайтов а ля
Wix, WebFlow или Tilda взамен предыдущего Proof-of-Concept'а, который не выполнял
свои функции, ложась под нагрузкой от любого реального использования.
</p>
<p style="margin-bottom: 0">
Были выделены ключевые проблемные моменты предыдущей версии, такие как:
</p>
<ul style="margin-top: 0">
<li>глобальный change detection, выполняющий ререндеринг на каждое взаимодействие</li>
<li>неэффективное клиент-серверное взаимодействие</li>
<li>высокая связность взаимодействий, конфликтующая между собой</li>
</ul>
<p style="margin-bottom: 0">
С учётом этих проблем, был реализован proof-of-concept, основанный на следующих принципах:
</p>
<ul>
<li>был задекларирована object model (а ля virtual dom), где объектами были
элементы результата (блок, секция, продукт и прочее),а не html element'ы</li>
<li>
был выделен независимый модуль рендеринга, трасформирующий этот virtual dom в
чистый html с учётом переданного ему контекста, который работал на чистом js
(без фреймворка)
</li>
<li>
любое взаимодействие, модифицирующее состояние, не изменяло состояние напрямую, а
порождало action, который после соответствующего reducer'а производил новое состояние
</li>
<li>
любое взаимодействие было сделано опциональным и представляло из себя rxjs flow,
возвращающщий на выходе либо модифицирующий action, либо новый контекст
</li>
</ul>
<p>
Эти ключевые идеи оказались правильными и разработанный мной PoC после
подключения других разработчиков за год удалось превратить в реально работающий
MVP.
</p>
<p>
Этот проект был одним из самых интересных в моей карьере и благодаря ему я
чрезвычайно сильно вырос как специалист. К сожалению, я должен был покинуть его
из-за несоответствия work-life balance моим ожиданиям (для контекста: рейтинг
компании на GlassDoor - 3.3).
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
Компания разрабатывала платформу для хостинга личных страниц на базе кастимизируемых,
предустановленных шаблонов
</p>
<p>
Задачей моей команды было осуществить миграцию личных страниц с AngularJS
на Angular (version 4 на тот момент) и добавить server-side rendering.
</p>
<p>
The main difficulties were:
</p>
<ul>
<li>
старая кодовая база была гремучей смесью генерируемых сервером обрывков html+js и
даже порой динамически отрендеренных css
</li>
<li>многие из необходимых API-endpoint'ов для получения данных не были реализованы</li>
<li>
полностью отсутствовали интеграционные тесты
<div class="print-spacer" style="height: 4rem"></div>
</li>
<li>
Angular SSR на тот момент не был частью фреймворка, а лишь сторонней библиотекой
с не самой лучшей документацией
</li>
</ul>
<p>
Проект был успешно реализован. Некоторые из результатов, которые мы получили:
</p>
<ul>
<li>у проекта появился базовый набор интеграционных тестов</li>
<li>миграция произошла незаметно для пользователей</li>
<li>FCP страницы снизился с 3s до 400ms (90-ый перцентиль)</li>
<li>размер клиента был сокращён с ~3mb до 800kb</li>
<li>мы оказались одним из первых продуктов, использующих SSR на продакшене </li>
</ul>
<p>
Благодаря данному проекту и необходимости изучать исходники для того, чтобы
получать ответы на возникающие вопросы, я очень хорошо разобрался в принципах
работы Angular'а "под капотом".
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
Компания собирала аналитические данные о покупках путём сканирования чеков
</p>
<p>Задачей нашей команды было написание и поддержка системы для ввода данных с чеков, не прошедших OCR.</p>
<p style="margin-bottom: 0">Моими задачами было следующее:</p>
<ul style="margin-top: 0">
<li>имплементация интерфейсов в рамках фреймворка React Admin</li>
<li>
взаимодействие с командой backend'а для уточнения данных по имеющимся endpoint'ам и/или
постановка задач на добаление новых
</li>
<li>
кастомизация элементов material-ui согласно брендбуку компании и реализация элементов,
не представленных в нём
</li>
<li>
ревью кода коллег, написание тестов
</li>
</ul>
<p>
Проект был реализован и запущен, но после был свёрнут из-за того, что компания не
получила следующий раунд финансирования.
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
<p class="company">Компания предоставляла персонализированные услуги стилистов, упрощая подбор одежды для работы</p>

<p>Я был нанят на UpWork'е для разработки анти-фрод решения.</p>
<p style="margin-bottom: 0">Разработанная система делала следующее:</p>
<ul style="margin-top: 0">
<li>регулярно выгружала данные о всех имеющихся заказах и их статусах из MySQL базы Magento</li>
<li>с помощью API или путём парсинга собирала статус сопуствующих отправлений из UPS, USPS и ShipStation</li>
<li>по сформулированным критериям помечала заказы как нормальные и подозрительные</li>
<li>для работы с подозрительными заказами предоставляла минималистичный интерфейс на Angular + Material</li>
</ul>
<p>
Система была реализована, запущена и интегрирована
в бизнес процессы компании.
</p>
`
        },
    ] satisfies Job[],
    education: {
        institution: 'Тамбовский Государственный Технический Университет',
        url: 'http://www.tstu.ru/',
        area: 'Прикладная информатика в экономике',
        studyType: 'Специалист',
        dates: ['Sep 2004', 'Jun 2010'],
    } satisfies Education,
}
