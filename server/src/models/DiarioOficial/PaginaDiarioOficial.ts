
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne

} from 'typeorm'
import { nanoid } from 'nanoid'
import limaxSlug from 'limax'
import Category from '../Category'
import SubCategory from '../SubCategory'
import Crawler from '../Crawler'
import DiarioOficial from '../Diario'

    @Entity()
class PaginaDiarioOficial {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column({ nullable: false, unique: true })
      url!: string;

      @Column({ type: 'date', nullable: true })
      dataPublicacao!: Date

      @Column({ nullable: true })
      estado!: string;

      @Column({ nullable: false })
      titulo!: string;

      @Column({ nullable: true })
      htmlContent!: string;

      @Column({ nullable: false })
      textContent!: string;

      @Column({ default: true })
      published!: boolean;

      @Column({ nullable: true })
      esId!: string

      @Column({ nullable: true })
      tipo!: string

      /*
      @Column({ nullable: true })
      viewCount!: number
    */
      @Column({ unique: true, nullable: false })
      slug!: string;

      @ManyToOne(() => DiarioOficial, diarioOficial => diarioOficial.paginas, {
        onDelete: 'CASCADE'
      })
      parent!: DiarioOficial

      @ManyToMany(() => Category, category => category.jurisprudences, {
        cascade: true
      })
      @JoinTable()
      categories!: Category[];

      @ManyToMany(() => SubCategory, subCategory => subCategory.jurisprudences, {
        cascade: true
      })
      @JoinTable()
      subCategories!: SubCategory[];

      @ManyToOne(() => Crawler, crawler => crawler.jurisprudences, {
        onDelete: 'CASCADE'
      })
      crawler!: Crawler

      @CreateDateColumn({ type: 'timestamp', nullable: false })
      createdAt!: Date;

      @UpdateDateColumn({ type: 'timestamp', nullable: false })
      updatedAt!: Date;

      @BeforeInsert()
      public createSlug (): void {
        const randomId = nanoid(5)
        this.slug = `${limaxSlug(this.titulo)}-${randomId}`
      }
    }
export default PaginaDiarioOficial
