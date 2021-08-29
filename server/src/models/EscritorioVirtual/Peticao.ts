
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToMany,
  JoinTable,
  BaseEntity

} from 'typeorm'
import { nanoid } from 'nanoid'
import limaxSlug from 'limax'
import { ObjectType, Field, ID } from 'type-graphql'

import Escritorio from './Escritorio'
import Processo from './Processo'
import User from '../User'

@ObjectType()
@Entity()
export default class Peticao extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field()
  @Column({ nullable: false })
  titulo!: string;

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field()
  @Column({ nullable: true })
  content!: string;

  @Field()
  @Column({ nullable: true })
  textContent!: string;

  @Field()
  @Column({ nullable: true })
  header!: string;

  @Field()
  @Column({ nullable: true })
  footer!: string;

  @Field()
  @Column({ nullable: false, default: true })
  private!: boolean;

  @Field(() => Escritorio)
  @ManyToOne(() => Escritorio, escritorio => escritorio.peticoes)
  escritorio?: Escritorio;

  @Field(() => Processo)
  @ManyToOne(() => Processo, processo => processo.peticoes)
  processo?: Processo;

  @Field(() => User)
  @ManyToOne(() => User, user => user.peticoes)
  owner!: User;

  @Field(() => [User])
  @ManyToMany(() => User, user => user.allowedPeticoes, {
    cascade: ['insert', 'update']
  })
  @JoinTable()
  allowAccessTo?: User[];

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

  @BeforeInsert()
  public createSlug (): void {
    const randomId = nanoid(5)
    this.slug = `${limaxSlug(this.titulo)}-${randomId}`
  }

  @BeforeUpdate()
  public updateDateUpdate () {
    this.updatedAt = new Date()
  }

  @BeforeUpdate()
  public updateSlug (): void {
    const randomId = nanoid(5)
    this.slug = `${limaxSlug(this.titulo)}-${randomId}`
  }
}
