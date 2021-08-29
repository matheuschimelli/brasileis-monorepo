
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

  @ObjectType()
  @Entity()
class PeticaoPrevidenciarista extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ nullable: true })
    titulo!: string;

    @Field()
    @Column({ nullable: true })
    resumo!: string;

    @Field()
    @Column({ nullable: true })
    tipo!: string;

    @Field()
    @Column({ nullable: true })
    status!: string;

    @Field()
    @Column({ nullable: true })
    sexo!: string;

    @Field()
    @Column({ nullable: true })
    tipoDeProcesso!: string;

    @Field()
    @Column({ nullable: true })
    tipoDeAcao!: string;

    @Field(() => [String])
    @Column('simple-array', { array: true })
    tiposDeBeneficio!: string[];

    @Field(() => [String])
    @Column('simple-array', { array: true })
    subtipo!: string[];

    @Field()
    @Column({ nullable: true })
    competencia!: string;

    @Field()
    @Column({ nullable: true })
    tempoDeContribuicaoMinimo!: number;

    @Field()
    @Column({ nullable: true })
    idadeMinima!: number;

    @Field()
    @Column({ nullable: true })
    periodo!: string;

    @Field()
    @Column({ nullable: true })
    slug!: string;

    @Field(() => [String])
    @Column('simple-array', { array: true })
    tags!: string[];

    @Field()
    @Column({ nullable: true })
    conteudo!: string;

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

    @BeforeUpdate()
    updateDateUpdate () {
      this.updatedAt = new Date()
    }
  }
export default PeticaoPrevidenciarista
