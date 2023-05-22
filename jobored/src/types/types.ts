export interface RootData {
    objects: Vacancy[]
    total: number
    more: boolean
    subscription_id: number
    subscription_active: boolean
}

export interface Vacancy {
    canEdit: boolean
    is_closed: boolean
    id: number
    id_client: number
    payment_from: number
    payment_to: number
    date_pub_to: number
    date_archived: number
    date_published: number
    address: string
    profession: string
    work: any
    compensation: any
    candidat: string
    metro: any[]
    currency: string
    vacancyRichText: string
    covid_vaccination_requirement: CovidVaccinationRequirement
    moveable: boolean
    agreement: boolean
    anonymous: boolean
    is_archive: boolean
    is_storage: boolean
    type_of_work: TypeOfWork
    place_of_work: PlaceOfWork
    education: Education
    experience: Experience
    maritalstatus: Maritalstatus
    children: Children
    client: Client
    languages: any[]
    driving_licence: any[]
    catalogues: Catalogue[]
    agency: Agency
    town: Town2
    already_sent_on_vacancy: boolean
    rejected: boolean
    response_info: any[]
    phone: string
    phones: Phone[]
    fax: any
    faxes: any
    client_logo: string
    highlight: boolean
    age_from: number
    age_to: number
    gender: Gender
    firm_name: string
    firm_activity: string
    link: string
    latitude: number
    longitude: number
}

export interface CovidVaccinationRequirement {
    id: number
    title: string
}

export interface TypeOfWork {
    id: number
    title: string
}

export interface PlaceOfWork {
    id: number
    title: string
}

export interface Education {
    id: number
    title: string
}

export interface Experience {
    id: number
    title: string
}

export interface Maritalstatus {
    id: number
    title: string
}

export interface Children {
    id: number
    title: string
}

export interface Client {
    id: number
    title: string
    link: string
    industry: any[]
    description: string
    vacancy_count: number
    staff_count: string
    client_logo: string
    address: any
    addresses: any[]
    url: string
    short_reg: boolean
    is_blocked: boolean
    registered_date: number
    town: Town
}

export interface Town {
    id: number
    title: string
    declension: string
    hasMetro: boolean
    genitive: string
}

export interface Catalogue {
    id: number
    title: string
    key: number
    positions: Position[]
}

export interface Position {
    id: number
    title: string
    key: number
}

export interface Agency {
    id: number
    title: string
}

export interface Town2 {
    id: number
    title: string
    declension: string
    hasMetro: boolean
    genitive: string
}

export interface Phone {
    number: string
    additionalNumber: any
}

export interface Gender {
    id: number
    title: string
}

export interface VacancyData{
    id:number;
    nameVacancy:string;
    nameFirm:string;
    town:string;
    typeOfWork:string;
    paymentTo:number,
    paymentFrom:number,
    paymentText:string
    currency:string,
    vacancyRichText:string,

}



export const option:any = [
    { value: 33, label: 'IT, Интернет, связь, телеком' },
    { value: 1, label: 'Административная работа, секретариат, АХО' },
    { value: 381, label: 'Банки, инвестиции, лизинг' },
    { value: 182, label: 'Безопасность, службы охраны' },
    { value: 11, label: 'Бухгалтерия, финансы, аудит' },
    { value: 151, label: 'Государственная служба' },
    { value: 62, label: 'Дизайн' },
    { value: 471, label: 'Домашний персонал' },
    { value: 512, label: 'Закупки, снабжение' },
    { value: 205, label: 'Искусство, культура, развлечения' },
    { value: 76, label: 'Кадры, управление персоналом' },
    { value: 426, label: 'Консалтинг, стратегическое развитие' },
    { value: 234, label: 'Маркетинг, реклама, PR' },
    { value: 136, label: 'Медицина, фармацевтика, ветеринария' },
    { value: 270, label: 'Наука, образование, повышение квалификации' },
    { value: 175, label: 'Некоммерческие организации, волонтерство' },
    { value: 625, label: 'Обмен персоналом' },
    { value: 438, label: 'Продажи' },
    { value: 327, label: 'Промышленность, производство' },
    { value: 505, label: 'Рабочий персонал' },
    { value: 548, label: 'Сельское хозяйство' },
    { value: 622, label: 'Службы доставки' },
    { value: 222, label: 'СМИ, издательства' },
    { value: 260, label: 'Спорт, фитнес, салоны красоты, SPA' },
    { value: 284, label: 'Страхование' },
    { value: 306, label: 'Строительство, проектирование, недвижимость' },
    { value: 414, label: 'Сырье' },
    { value: 478, label: 'Топ-персонал' },
    { value: 86, label: 'Транспорт, логистика, ВЭД' },
    { value: 197, label: 'Туризм, гостиницы, общественное питание' },
    { value: 362, label: 'Услуги, ремонт, сервисное обслуживание' },
    { value: 100, label: 'Юриспруденция' }
]