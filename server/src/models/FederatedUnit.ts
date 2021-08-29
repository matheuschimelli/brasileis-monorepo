import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BeforeInsert,
  UpdateDateColumn,
  CreateDateColumn,
  JoinTable
} from 'typeorm'
import Article from './Article'
import Crawler from './Crawler'
import Law from './Law'
import Category from './Category'
import limaxSlug from 'limax'

@Entity()
export class FederatedUnit {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true, nullable: false })
    slug!: string;

    @Column({ nullable: true })
    description!: string;

    @Column({ nullable: true })
    wiki!: string;

    @ManyToMany(() => Category, category => category.federatedUnit, {
      cascade: true
    })
    @JoinTable()
    categories!: Category[];

    @ManyToMany(() => Article, article => article.categories)
    articles!: Article[];

    @ManyToMany(() => Crawler, crawler => crawler.categories)
    crawlers!: Crawler[];

    @ManyToMany(() => Law, law => law.categories)
    laws!: Crawler[];

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt!: Date;

    @BeforeInsert()
    public createSlug (): void {
      this.slug = limaxSlug(this.name)
    }
}

export default FederatedUnit
