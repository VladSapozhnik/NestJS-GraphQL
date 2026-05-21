import { Field, ObjectType } from '@nestjs/graphql';
import { PostModel } from '../../posts/models/post.model';

@ObjectType()
export class UserModel {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => [PostModel], { nullable: 'itemsAndList' })
  posts?: PostModel[];
}

@ObjectType()
export class UserPrivateModel extends UserModel {
  @Field(() => String)
  password: string;
}
