
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity
} from 'typeorm'
import {
  ObjectType,
  Field,
  ID
} from 'type-graphql'

import Category from './Category'
import SubCategory from './SubCategory'
import CrawlerUpdateTime from './CrawlerUpdateTime'
import CrawlerHtmlSelector from './CrawlerHtmlSelector'
import CrawlerType from './CrawlerType'
import Law from './Law'
import Jurisprudence from './Jurisprudence'

@ObjectType()
@Entity()
class Crawler extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: false })
  @Column({ nullable: false })
  crawlerName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  baseUrl!: string;

  @Field({ nullable: false })
  @Column({ default: true })
  followOnlySameHost!: boolean;

  @Column({ default: false })
  updatedByBot!: boolean;

  @Field(() => [String])
  @Column('simple-array', { nullable: true })
  urlsToVisit!: string[]

  @Field(() => [String])
  @Column('simple-array', { nullable: true })
  logs!: string[]

  @Column({ nullable: true })
  urlsToVisitMongoId!: string

  @Column({ nullable: false })
  customCode!: string;

  @Field(() => CrawlerType, { nullable: true })
  @ManyToOne(() => CrawlerType, crawlerType => crawlerType.crawlers, {
    cascade: true
  })
  @JoinColumn()
  crawlerType!: CrawlerType

  @Field(() => CrawlerUpdateTime, { nullable: true })
  @OneToOne(() => CrawlerUpdateTime, crawlerUpdateTime => crawlerUpdateTime.crawler, {
    cascade: true
  })
  @JoinColumn()
  updateTime!: CrawlerUpdateTime

  @Field(() => CrawlerHtmlSelector, { nullable: true })
  @OneToOne(() => CrawlerHtmlSelector, crawlerHtmlSelector => crawlerHtmlSelector.crawler, {
    cascade: true
  })
  @JoinColumn()
  htmlSelectors!: CrawlerHtmlSelector

  @Field(() => [Category])
  @ManyToMany(() => Category, category => category.articles, {
    cascade: true
  })
  @JoinTable()
  categories!: Category[];

  @Field(() => [SubCategory])
  @ManyToMany(() => SubCategory, subCategory => subCategory.crawlers, {
    cascade: true
  })
  @JoinTable()
  subCategories!: SubCategory[];

  @OneToMany(() => Law, law => law.crawler, {
    cascade: true
  })
  laws!: Law[]

  @OneToMany(() => Jurisprudence, jurisprudence => jurisprudence.crawler, {
    cascade: true
  })
  jurisprudences!: Jurisprudence[]

  @Field()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @BeforeInsert()
  public updateDateCreation () {
    this.createdAt = new Date()
  }

  @BeforeUpdate()
  updateDateUpdate () {
    this.updatedAt = new Date()
  }
}
export default Crawler
