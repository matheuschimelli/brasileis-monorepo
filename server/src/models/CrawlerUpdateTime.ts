import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity } from 'typeorm'

import {
  ObjectType,
  Field,
  ID
} from 'type-graphql'

import Crawler from './Crawler'

@ObjectType()
@Entity()
export class CrawlerUpdateTime extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: true })
    @Column({ default: false })
    monday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    tuesday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    wednesday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    thursday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    friday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    saturday!: boolean;

    @Field({ nullable: true })
    @Column({ default: false })
    sunday!: boolean;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateMondayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateTuesdayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateWednesdayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateThursdayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateFridayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateSaturdayTime!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    updateSundayTime!: string;

    @Field(() => Crawler)
    @OneToOne(() => Crawler, crawler => crawler.updateTime)
    crawler!: Crawler
}

export default CrawlerUpdateTime
