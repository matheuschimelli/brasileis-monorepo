
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  BaseEntity

} from 'typeorm'

import { ObjectType, Field, ID } from 'type-graphql'

import limaxSlug from 'limax'
import Cliente from './Cliente'
import Processo from './Processo'
import Peticao from './Peticao'
import User from '../User'

@ObjectType()
@Entity()
export default class Escritorio extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field()
  @Column({ nullable: false })
  nome!: string;

  @Column({ unique: true, nullable: false })
  slug!: string;

  @Field()
  @Column({ nullable: true })
  descricao?: string;

  @Field()
  @Column({ nullable: true })
  imgLogo?: string;

  @Column({ default: true })
  ativo!: boolean;

  @Field(() => User)
  @OneToOne(() => User, user => user.escritorioAdministador)
  administrador!: User

  @Field(() => [User])
  @OneToMany(() => User, user => user.escritorioSocio)
  socios?: User[];

  @Field(() => [Cliente])
  @OneToMany(() => Cliente, cliente => cliente.escritorio)
  clientes?: Cliente[];

  @Field(() => [Processo])
  @OneToMany(() => Processo, processo => processo.escritorio)
  processos?: Processo[];

  @Field(() => [Processo])
  @OneToMany(() => Peticao, peticao => peticao.escritorio)
  peticoes?: Processo[];

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
