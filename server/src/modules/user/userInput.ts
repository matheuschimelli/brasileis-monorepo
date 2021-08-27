/* eslint-disable max-classes-per-file */
import {
  ObjectType,
  Field,
  ID,
  buildSchemaSync,
  Resolver,
  Query,
} from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  email: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;
}
@Resolver(User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  async allUsers() {
    return prisma.user.findMany();
  }
}
