
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne,
  BaseEntity
} from 'typeorm'
import { nanoid } from 'nanoid'
import limaxSlug from 'limax'
import Category from './Category'
import SubCategory from './SubCategory'
import Crawler from './Crawler'
import {
  ObjectType,
  Field,
  ID
} from 'type-graphql'

@ObjectType()
@Entity()
class Law extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ nullable: false, unique: true })
  url!: string;

  @Field()
  @Column({ nullable: true })
  parentUrl!: string;

  @Field()
  @Column({ nullable: false })
  title!: string;

  @Field()
  @Column({ nullable: true })
  prefix!: string;

  @Field()
  @Column({ nullable: true })
  htmlContent!: string;

  @Field()
  @Column({ nullable: false })
  textContent!: string;

  @Column({ nullable: true })
  contentHtmlSelector!: string;

  @Field()
  @Column({ nullable: true })
  updateDiff!: string;

  @Column({ default: true })
  published!: boolean;

  @Column({ nullable: true })
  esId!: string

  @Field()
  @Column({ nullable: true })
  tipo!: string

  @Field()
  @Column({ nullable: true })
  numero!: string

  @Field()
  @Column({ nullable: true })
  orgao!: string

  @Field()
  @Column({ nullable: true, type: 'date' })
  dataPublicacao!: Date

  @Field()
  @Column({ nullable: true })
  ementa!: string

  /*
  @Column({ nullable: true })
  viewCount!: number
*/

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field(() => [Category])
  @ManyToMany(() => Category, category => category.laws, {
    cascade: true
  })
  @JoinTable()
  categories!: Category[];

  @Field(() => [SubCategory])
  @ManyToMany(() => SubCategory, subCategory => subCategory.laws, {
    cascade: true
  })
  @JoinTable()
  subCategories!: SubCategory[];

  @ManyToOne(() => Crawler, crawler => crawler.laws, {
    onDelete: 'CASCADE'
  })
  crawler!: Crawler

  @Field()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @BeforeInsert()
  public createSlug (): void {
    const randomId = nanoid(5)
    this.slug = `${limaxSlug(this.title)}-${randomId}`
  }
}
export default Law
