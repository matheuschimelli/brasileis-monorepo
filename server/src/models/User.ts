import {
  Entity,
  PrimaryGeneratedColumn,
  Column, CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  BaseEntity
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import Escritorio from './EscritorioVirtual/Escritorio'
import Peticao from './EscritorioVirtual/Peticao'

interface GoogleTokens {
  kind: string;
  accessToken: string;
  accessTokenExpires: Date | string;
  refreshToken: string;
}
export enum UserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    GUEST = 'guest',
    SUBSCRIBER = 'subscriber',
    PERSONAL = 'personal',
    PRO = 'pro',
    PREMIUM = 'premium',
    BUSINESS = 'business',
    STAFF = 'staff',
    FREE = 'free',
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: false, nullable: true, length: 255 })
  name!: string;

  @Field()
  @Column({ unique: true, nullable: false, length: 255 })
  email!: string;

  @Field()
  @Column({ nullable: true, length: 20 })
  username!: string;

  @Field()
  @Column({ nullable: true })
  profilePicture!: string;

  @Column('simple-array', { nullable: true })
  tokens!: GoogleTokens[]

  @Column({ default: false })
  admin!: boolean;

  @Field()
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.FREE
  })
  role!: UserRole

  @Field(() => Escritorio)
  @OneToOne(() => Escritorio, escritorio => escritorio.administrador, {
    cascade: true
  })
  @JoinColumn()
  escritorioAdministador!: Escritorio

  @Field(() => Escritorio)
  @ManyToOne(() => Escritorio, escritorio => escritorio.socios)
  escritorioSocio?: Escritorio

  @Field(() => [Peticao])
  @OneToMany(() => Peticao, peticao => peticao.owner, {
    cascade: true
  })
  peticoes?: Peticao[];

  // Peticoes which current authenticated user has access.
  @Field(() => [Peticao])
  @ManyToMany(() => Peticao, peticao => peticao.allowAccessTo)
  allowedPeticoes?: Peticao[];

  @Column({ unique: true, nullable: false })
  google!: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  expirationDate!: Date;

  @BeforeInsert()
  public updateDateCreation () {
    this.createdAt = new Date()
  }

  @BeforeUpdate()
  updateDateUpdate () {
    this.updatedAt = new Date()
  }
}

export default User
