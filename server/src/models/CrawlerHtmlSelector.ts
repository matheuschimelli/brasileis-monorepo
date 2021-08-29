import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  BaseEntity
} from 'typeorm'

import {
  ObjectType,
  Field,
  ID
} from 'type-graphql'

import Crawler from './Crawler'

@ObjectType()
@Entity()
export class CrawlerHtmlSelector extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    urlListEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    titleEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    alternativeTitleEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    contentEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    paginationEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    nextPageEl?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    previousPageEl?: string;

    @Field(() => Crawler)
    @OneToOne(() => Crawler, crawler => crawler.htmlSelectors)
    crawler?: Crawler
}

export default CrawlerHtmlSelector
