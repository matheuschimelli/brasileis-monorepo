export enum JobTypeEnum {
    'CRAWLER',
    'SYSTEM',
    'MAIL',
    'NOTIFICATION',
    'PROCESSOR'
}

export enum CrawlerName {
    'DEFAULT_CRAWLER',
    'CRAWLER_CDC'
}

export type NewJobData = {
    id?: string;
    queue: string;
    jobData: any
}