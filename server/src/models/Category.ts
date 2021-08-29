import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BeforeInsert,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity
} from 'typeorm'
import Article from './Article'
import Crawler from './Crawler'
import Law from './Law'
import limaxSlug from 'limax'
import FederatedUnit from './FederatedUnit'
import Jurisprudence from './Jurisprudence'

import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field()
  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  wiki!: string;

  @Column({ nullable: true })
  order!: number;

  @Column({ default: false })
  featured!:boolean

  @Field(() => [Article])
  @ManyToMany(() => Article, article => article.categories)
  articles!: Article[];

  @Field(() => [Crawler])
  @ManyToMany(() => Crawler, crawler => crawler.categories)
  crawlers!: Crawler[];

  @Field(() => [Law])
  @ManyToMany(() => Law, law => law.categories)
  laws!: Law[];

  @ManyToMany(() => Jurisprudence, jurisprudence => jurisprudence.categories)
  jurisprudences!: Jurisprudence[];

  @ManyToMany(() => FederatedUnit, federatedUnit => federatedUnit.categories)
  federatedUnit!: FederatedUnit[];

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @BeforeInsert()
  public createSlug (): void {
    this.slug = limaxSlug(this.name)
  }
}

export default Category
