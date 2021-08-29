
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity

} from 'typeorm'
import limaxSlug from 'limax'
import { ObjectType, Field, ID } from 'type-graphql'

import Escritorio from './Escritorio'
import Processo from './Processo'

@ObjectType()
@Entity()
export default class Cliente extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field()
  @Column({ nullable: false })
  nome!: string;

  @Field()
  @Column({ nullable: true })
  cpf!: string;

  @Field()
  @Column({ nullable: true })
  rg!: string;

  @Field()
  @Column({ nullable: true })
  tituloEleitor!: string;

  @Field()
  @Column({ unique: true, nullable: false })
  slug!: string;

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
  @ManyToOne(() => Escritorio, escritorio => escritorio.clientes)
  escritorio?: Escritorio;

  @Field(() => [Escritorio])
  @ManyToMany(() => Processo, processo => processo.clientes)
  processos!: Processo[];

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
