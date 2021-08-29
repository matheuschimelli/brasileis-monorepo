import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity
} from 'typeorm'
import Crawler from './Crawler'

import {
  ObjectType,
  Field,
  ID
} from 'type-graphql'

@ObjectType()
@Entity()
export class CrawlerType extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: false })
  @Column({ unique: true, nullable: false })
  name!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  functionName?: string

  @Field({ nullable: true })
  @Column()
  description!: string

  @Field(() => String, { nullable: true })
  @Column({ type: 'json', nullable: true })
  params?: JSON

  @Field(() => [Crawler])
  @OneToMany(() => Crawler, crawler => crawler.crawlerType)
  crawlers!: Crawler[]
}

export default CrawlerType
