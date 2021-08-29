import { InputType, Field } from 'type-graphql'
// import { MaxLength } from 'class-validator'

@InputType()
export class UpdatePeticaoInput {
  @Field({ nullable: false })
  titulo!: string;

  @Field({ nullable: false })
  content!: string;

  @Field({ nullable: false })
  header!: string;

  @Field({ nullable: false })
  footer!: string;

  @Field({ nullable: false })
  isPrivate!: boolean;
}
