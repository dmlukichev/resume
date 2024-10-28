export type Dates = [string, string]
export type Tech = [string, 'primary' | 'secondary']

type UrlString = `http${string}/`

export type Job = {
    company: string,
    site: UrlString,
    role: string,
    employment: 'Full-time' | 'Contract' | 'Freelance',
    dates: Dates,
    techs: Tech[],
    description: string|string[],
    printSpacer?: `${string}rem`
}

export type Education = {
    institution: string
    url: UrlString,
    area: string,
    studyType: string,
    dates: Dates
    description?: string[]
}

const a = [] as Education[]
let el = a[0]
