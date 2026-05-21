import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
  @Field(() => String)
  userId: string;
}
