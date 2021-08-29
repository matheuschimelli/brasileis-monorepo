import { InputType, Field } from 'type-graphql'
import { ArrayMinSize } from 'class-validator'

@InputType()
export default class CreateArticleInput {
  @Field({ nullable: false })
  title?: string;

  @Field({ nullable: false })
  description?: string;

  @Field({ nullable: false })
  content?: string;

  @Field({ nullable: false })
  summary?: string;

  @Field()
  featured!: boolean;

  @Field(() => [String], { nullable: false })
  @ArrayMinSize(1)
  categories?: string[];

  @Field(() => [String], { nullable: false })
  @ArrayMinSize(1)
  subCategories?: string[];
}
