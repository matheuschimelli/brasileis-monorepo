import { InputType, Field } from 'type-graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class CreateCrawlerTypeInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;

  @Field({ nullable: false })
  description?: string;

  @Field({ nullable: true })
  functionName?: string;

  @Field({ nullable: true })
  params?: string;
}

@InputType()
export class UpdateCrawlerTypeInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;

  @Field({ nullable: false })
  description?: string;

  @Field({ nullable: true })
  functionName?: string;

  @Field({ nullable: true })
  params?: string;
}
