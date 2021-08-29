import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BeforeInsert,
  BaseEntity
} from 'typeorm'

import { ObjectType, Field, ID } from 'type-graphql'

import Article from './Article'
import Crawler from './Crawler'
import Law from './Law'
import Jurisprudence from './Jurisprudence'

import limaxSlug from 'limax'

@ObjectType()
@Entity()
export class SubCategory extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field({ nullable: false })
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field(() => [Article])
  @ManyToMany(() => Article, article => article.subCategories)
  articles!: Article[];

  @Field(() => [Crawler])
  @ManyToMany(() => Crawler, crawler => crawler.subCategories)
  crawlers!: Crawler[];

  @Field(() => [Law])
  @ManyToMany(() => Law, law => law.categories)
  laws!: Law[];

  @ManyToMany(() => Jurisprudence, jurisprudence => jurisprudence.categories)
  jurisprudences!: Jurisprudence[];

  @BeforeInsert()
  public createSlug (): void {
    this.slug = limaxSlug(this.name)
  }
}

export default SubCategory
