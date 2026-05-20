import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPrivateModel {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}
