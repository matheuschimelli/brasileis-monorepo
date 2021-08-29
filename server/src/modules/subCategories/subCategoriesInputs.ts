import { InputType, Field } from 'type-graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class CreateSubCategoryInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;
}

@InputType()
export class UpdateSubCategoryInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;

  @Field(() => [String], { nullable: true })
  laws?: string[];
}
