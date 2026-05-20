import { Field, ObjectType } from '@nestjs/graphql';
import { PostModel } from './post.model';

@ObjectType()
export class UserPublicModel {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => [PostModel], { nullable: true })
  posts?: PostModel[];
}
