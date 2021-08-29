
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
  OneToMany,
  BaseEntity

} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import limaxSlug from 'limax'
import Escritorio from './Escritorio'
import Cliente from './Cliente'
import Peticao from './Peticao'

@ObjectType()
@Entity()
export default class Processo extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field()
  @Column({ nullable: false })
  nome!: string;

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field()
  @Column({ nullable: true })
  andamento!: string;

  @Field()
  @Column({ nullable: true })
  tri!: string;

  @Field()
  @Column({ nullable: true })
  rg!: string;

  @Field()
  @Column({ nullable: true })
  tituloEleitor!: string;

  @Field()
  @Column({ nullable: true })
  carteiraMotorista!: string;

  @Field()
  @Column({ nullable: true })
  endereco!: string;

  @Field()
  @Column({ nullable: true })
  endereco2!: string;

  @Field()
  @Column({ nullable: true })
  telefone!: string;

  @Field()
  @Column({ nullable: true })
  telefone2!: string;

  @Field()
  @Column({ nullable: true })
  email!: string;

  @Field()
  @Column({ nullable: true })
  email2!: string;

  @Field()
  @Column({ nullable: true })
  estadoCivil!: string;

  @Field(() => Escritorio)
  @ManyToOne(() => Escritorio, escritorio => escritorio.processos)
  escritorio?: Escritorio;

  @Field(() => [Peticao])
  @OneToMany(() => Peticao, peticao => peticao.processo)
  peticoes?: Peticao[];

  @Field(() => [Cliente])
  @ManyToMany(() => Cliente, cliente => cliente.processos, {
    cascade: true
  })
  @JoinTable()
  clientes!: Cliente[];

  @Field()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @BeforeInsert()
  public createSlug (): void {
    this.slug = limaxSlug(this.nome)
  }

  @BeforeInsert()
  public updateDateCreation () {
    this.createdAt = new Date()
  }

  @BeforeUpdate()
  public updateDateUpdate () {
    this.updatedAt = new Date()
  }

  public updateSlug (): void {
    this.slug = limaxSlug(this.nome)
  }
}
