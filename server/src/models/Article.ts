
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity
} from 'typeorm'
import limaxSlug from 'limax'
import { ObjectType, Field, ID } from 'type-graphql'

import Category from './Category'
import SubCategory from './SubCategory'

@ObjectType()
@Entity()
class Article extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ nullable: false })
  title!: string;

  @Field()
  @Column({ default: false })
  featured!: boolean;

  @Field()
  @Column({ nullable: true })
  summary?: string;

  @Field()
  @Column({ nullable: true })
  imgCover?: string;

  @Field()
  @Column({ nullable: true })
  content?: string;

  @Field()
  @Column({ nullable: true })
  textContent?: string

  @Column()
  published!: boolean;

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field(() => [Category])
  @ManyToMany(() => Category, category => category.articles, {
    cascade: true
  })
  @JoinTable()
  categories!: Category[];

  // @ManyToMany(() => Category, category => category.articles, { lazy: true, cascade: true })
  // @Field(() => [Category])
  // categories!: Promise<Category[]>

  @Field(() => [SubCategory])
  @ManyToMany(() => SubCategory, subCategory => subCategory.articles, {
    cascade: true
  })
  @JoinTable()
  subCategories!: SubCategory[];

  @Field()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @BeforeInsert()
  public createSlug (): void {
    this.slug = limaxSlug(this.title)
  }

  @BeforeInsert()
  public updateDateCreation () {
    this.createdAt = new Date()
  }

  @BeforeUpdate()
  updateDateUpdate () {
    this.updatedAt = new Date()
  }

  @BeforeUpdate()
  updateSlug () {
    this.slug = limaxSlug(this.title)
  }
}
export default Article
