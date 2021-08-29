
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
  OneToMany,
  ManyToOne

} from 'typeorm'
import limaxSlug from 'limax'
import Category from './Category'
import SubCategory from './SubCategory'

  @Entity()
class CategoryPage {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column({ nullable: false })
      title!: string;

      @Column({ nullable: true })
      summary?: string;

      @Column({ nullable: true })
      imgCover?: string;

      @Column({ nullable: true })
      content?: string;

      @Column({ nullable: true })
      textContent?: string

      @Column({ nullable: false, default: false })
      master?: boolean

      @Column({ nullable: false, default: false })
      grid?: boolean

      @Column()
      published!: boolean;

      @Column({ unique: true, nullable: false })
      slug!: string;

      @ManyToMany(() => Category, category => category.articles, {
        cascade: true
      })
      @JoinTable()
      categories!: Category[];

      @ManyToMany(() => SubCategory, subCategory => subCategory.articles, {
        cascade: true
      })
      @JoinTable()
      subCategories!: SubCategory[];

      @ManyToOne(() => CategoryPage, categoryPage => categoryPage.children, { nullable: true })
      parent?: CategoryPage;

      @OneToMany(() => CategoryPage, categoryPage => categoryPage.parent, { nullable: true })
      children?: CategoryPage[];

      @CreateDateColumn({ type: 'timestamp', nullable: false })
      createdAt!: Date;

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

      public updateSlug (): void {
        this.slug = limaxSlug(this.title)
      }
  }
export default CategoryPage
