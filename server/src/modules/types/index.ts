import { BlockType, Instancia, TipoJudiciario } from "@prisma/client";
import type { Job as BullJob } from "bull";

export type Job = BullJob

export type CrawlerParams = {
    id: string;
    name: string;
    description: string;
    isUrlOnly: boolean;
    source: string;
    cron: string;
    notifyUpdates: true;
    slug: string;
    mainBlockTitle: string;
    mainBlockDescription: string;
    version: 1;
    createdAt: string;
    updatedAt: string;
    lawBlockId: string;
    crawlerTypeId: string;
    blockType: BlockType;
    topicId?: string;

    crawlerType: {
        id: string;
        name: string;
        description: string;
        customCode: null;
        createdAt: string;
        updatedAt: string;
    };
}
export type JobResult = {
    queue: string,
    data: {
        id: string,
        name: string,
        description: string,
        isUrlOnly: boolean,
        source: string,
        cron: string,
        notifyUpdates: true,
        slug: string,
        mainBlockTitle: string,
        mainBlockDescription: string,
        version: 1,
        createdAt: string,
        updatedAt: string,
        lawBlockId: string,
        crawlerTypeId: string,
        blockType: BlockType,
        crawlerType: {
            id: string,
            name: string,
            description: string,
            customCode: null,
            createdAt: string,
            updatedAt: string
        }
    },
    result: {
        pageHtml: string,
        pageText: string,
        articles: any[]
    }
}
export type Topic = {
    id?: string
    name?: string
    description?: string
}

export type CrawlerInput = {
    id?: string
    cron: string,
    description: string,
    name: string,
    lawBlockId: string,
    source: string,
    crawlerTypeId: string,
    slug: string,
    mainBlockTitle: string,
    mainBlockDescription: string,
    version: number
    isUrlOnly?: boolean
    notifyUpdates?: boolean
    blockType: BlockType,
    categories: string[]

}

export type ESDocument = {
    blockType: string | null
    name?: string | null
    title?: string | null
    value?: string | null
    originalText?: string | null
    searchText?: string | null
    searchString?: string | null
    identifier?: string | null
    source?: string | null
    slug?: string | null

    tipoJudiciario?: string | null
    instancia?: string | null
    tribunal?: string | null
    estado?: string | null
    comarca?: string | null
    dataJulgamento?: Date | null
    dataPublicacao?: Date | null
    ementa?: string | null
    numeroProcesso?: string | null
    orgaoJulgador?: string | null
    relator?: string | null
    segredoDeJustica?: string | null
}

export type FeedItem = {
    title: string
    content: string
    topicId: string
    lawBlockId: string
}

export type Juris = {
    comarca?: string
    dataJulgamento?: string
    dataPublicacao?: string
    ementa?: string
    integra?: string
    numeroProcesso?: string
    orgaoJulgador?: string
    relator?: string
    segredoDeJustica?: string
    source: string
    pageText: string
    estado: string
    tribunal: string
    tipo: TipoJudiciario
    instancia: Instancia
}

export type Jurisprudencia = {
    updated: boolean,
    source: string
    checkSum: string
    tipo: TipoJudiciario
    instancia: Instancia
    tribunal: string
    estado: string
    comarca: string
    dataJulgamento: Date
    dataPublicacao: Date
    ementa: string
    integra: string
    numeroProcesso: string
    orgaoJulgador: string
    relator: string
    segredoDeJustica: string
    keyWords: string

}

export type CreateLawBlockFromArrayParams = {
    data: any[]
    masterParentId: string
    name: string
    codeName: string
    masterLawBlock: any
    version?: number
}

export type UpdateParams = {
    oldData?: any[]
    newData?: any[]
    parentId?: string
    name?: string
    codeName?: string
    masterLawBlock?: any,
    masterBlockId?: string,
    topicId: string
}