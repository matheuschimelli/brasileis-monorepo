import { InputType, Field } from 'type-graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class CreateCategoryInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;

  @Field({ defaultValue: false })
  featured?: boolean;

  @Field({ nullable: false })
  description?: string;
}

@InputType()
export class UpdateCategoryInput {
  @Field({ nullable: false })
  @MaxLength(60)
  name!: string;

  @Field({ defaultValue: false })
  featured?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  laws?: string[];
}
