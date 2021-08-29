import { Browser, Page } from 'puppeteer'
import { Request } from 'express'
import { Category } from '../models/Category'
import { SubCategory } from '../models/SubCategory'

export interface AppContext {
  req: Request
}
export interface IGetUserAuthInfoRequest extends Request {
  user: object // or any other type
}

export interface Notification {
  title: string;
  error: boolean;
  errorMsg?: string;
  crawler:{
      name: string;
      id: string | number;
      startTime?: string | Date;
      endTime?: string | Date;
      day?: string | Date
  }
}
export interface PageBrowser{
    page: Page;
    browser: Browser;
}

export interface PageData {
    title: string;
    content: string;
    contentHtml: string;
    cleanHTML?: string | any;
    h1: string[];
    h2: string[];
    h3: string[];
    h4: string[];
    b: string[];
    i: string[];
    anchors: string[],
    pageHTML: string;
    pageText: string;
    contentIndexUrls: string[];
  }

/**
   * Crawler Settings
   * Params: data which will be sent to crawler.
   * Options: Puppeteer and redis options
   * JobOptions:
   */
export interface Crawler {
    name?: string;
    id: string | number;
    categories: Category[];
    subCategories: SubCategory[];
    enableLogs?: boolean;
    debug?: boolean;
    headless?: boolean;
    redisConnection?:{
        host: string;
        port: number;
    }
    baseUrl?: string;
    startUrl?: string;
    urlsToVisit?: string[];
    urlsFoundInPageToVisit?: string[]
    followBaseUrl?: boolean;
    selectors:{
        page:{
            title?: string;
            content?:string;
            /**
             * Content which contains a list with urls to be crawled.
             */
            contentIndex?: string;
        }
    }
    useFallBackForAll?: boolean;
    useContentIndexFallBack?: boolean;
    schedule?:{
      cron?:string;
    }
  }

export interface PageSelectors{
  title?: boolean;
  content?: boolean;
  h1?:boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;
  body?: boolean;
  footer?: boolean;
  a?: boolean;
}

export interface DownloadPdfParams {
  fileName: string;
  url:string
}
export declare interface PDFJobData {
  id:number|string
  name?:string
  categories: Category[]
  subCategories: SubCategory[]
  url:string
}
