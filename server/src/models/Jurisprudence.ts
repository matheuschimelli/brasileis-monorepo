
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
import Category from './Category'
import SubCategory from './SubCategory'
import Crawler from './Crawler'

@Entity()
class Jurisprudence {
        @PrimaryGeneratedColumn()
        id!: number;

        @Column({ nullable: false, unique: true })
        url!: string;

        @Column({ nullable: true })
        parentUrl!: string;

        @Column({ nullable: false })
        titulo!: string;

        @Column({ nullable: false })
        recursoNome!: string;

        @Column({ nullable: true })
        htmlContent!: string;

        @Column({ nullable: false })
        textContent!: string;

        @Column({ nullable: true })
        contentHtmlSelector!: string;

        @Column({ nullable: true })
        updateDiff!: string;

        @Column({ default: true })
        published!: boolean;

        @Column({ nullable: true })
        esId!: string

        @Column({ nullable: true })
        tribunal!: string

        @Column({ nullable: true })
        siglaTribunal!: string

        @Column({ nullable: true })
        orgaoJulgador!: string

        @Column({ type: 'date', nullable: true })
        dataJulgamento!: Date

        @Column({ type: 'date', nullable: true })
        dataPublicacao!: Date

        @Column({ nullable: true })
        tipo!: string

        @Column({ nullable: true })
        classe!: string

        @Column({ nullable: false, unique: true })
        codigoProcesso!: string

        @Column({ nullable: true })
        unidadeFederativa!: string

        @Column({ nullable: true })
        relator!: string

        @Column({ nullable: true })
        decisao!: string

        @Column({ nullable: true })
        ementa!: string

        @Column({ nullable: true })
        recorrente!: string

        @Column({ nullable: true })
        recorrido!: string

        @Column({ nullable: true })
        relatorio!: string

        @Column({ nullable: true })
        acordao!: string

        @Column({ nullable: true })
        juiz!: string

        @Column({ nullable: true })
        advogados!: string

        @Column({ nullable: true })
        advogadosReu!: string

        /*
        @Column({ nullable: true })
        viewCount!: number
  */
        @Column({ unique: true, nullable: false })
        slug!: string;

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
export default Jurisprudence
