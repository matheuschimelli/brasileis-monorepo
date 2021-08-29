import { InputType, Field } from 'type-graphql'
import { MaxLength } from 'class-validator'

@InputType()
class HTMLSelectors {
  @Field({ nullable: true })
  urlListEl?: string

  @Field({ nullable: true })
  titleEl?: string

  @Field({ nullable: true })
  alternativeTitleEl?: string

  @Field({ nullable: true })
  contentEl?: string

  @Field({ nullable: true })
  paginationEl?: string

  @Field({ nullable: true })
  nextPageEl?: string

  @Field({ nullable: true })
  previousPageEl?: string
}

@InputType()
class UpdateTime {
  @Field({ defaultValue: false })
  monday?: boolean

  @Field({ defaultValue: false })
  tuesday?: boolean

  @Field({ defaultValue: false })
  wednesday?: boolean

  @Field({ defaultValue: false })
  thursday?: boolean

  @Field({ defaultValue: false })
  friday?: boolean

  @Field({ defaultValue: false })
  saturday?: boolean

  @Field({ defaultValue: false })
  sunday?: boolean

   @Field({ nullable: true })
  updateMondayTime?: string

   @Field({ nullable: true })
  updateTuesdayTime?: string

   @Field({ nullable: true })
  updateWednesdayTime?: string

   @Field({ nullable: true })
  updateThursdayTime?: string

   @Field({ nullable: true })
  updateFridayTime?: string

   @Field({ nullable: true })
  updateSaturdayTime?: string

   @Field({ nullable: true })
  updateSundayTime?: string
}

@InputType()
export class CreateCrawlerInput {
  @Field({ nullable: false })
  @MaxLength(60)
  crawlerName!: string;

  @Field({ defaultValue: true })
  followOnlySameHost!: boolean;

  @Field(() => [String], { nullable: true })
  urlsToVisit!: string[];

  @Field(() => UpdateTime)
  updateTime!: UpdateTime;

  @Field(() => HTMLSelectors)
  htmlSelectors?: HTMLSelectors;

  @Field(() => [String], { nullable: false })
  categories?: string[];

  @Field(() => [String], { nullable: false })
  subCategories?: string[];

  @Field({ nullable: true })
  crawlerType!: string;

  @Field()
  baseUrl!: string;
}

@InputType()
export class UpdateCrawlerInput {
  @Field({ nullable: false })
  @MaxLength(60)
  crawlerName!: string;

  @Field({ defaultValue: true })
  followOnlySameHost!: boolean;

  @Field(() => [String], { nullable: true })
  urlsToVisit!: string[];

  @Field(() => UpdateTime)
  updateTime!: UpdateTime;

  @Field(() => HTMLSelectors, { nullable: true })
  htmlSelectors?: HTMLSelectors;

  @Field(() => [String], { nullable: false })
  categories?: string[];

  @Field(() => [String], { nullable: false })
  subCategories?: string[];

  @Field({ nullable: true })
  crawlerType!: string;

  @Field()
  baseUrl!: string;
}
