import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserPrivateModel } from './models/user.model';
import { PostModel } from '../posts/models/post.model';
import { PostsLoader } from '../loaders/posts.loader';

@Resolver(() => UserPrivateModel)
export class UsersPrivateResolver {
  constructor(
    private readonly appService: UsersService,
    private readonly postsLoader: PostsLoader,
  ) {}
  @Query(() => [UserPrivateModel])
  getUsersPrivate(): UserPrivateModel[] {
    return this.appService.getUsers();
  }

  @ResolveField(() => [PostModel], { name: 'posts' })
  async getPosts(@Parent() user: UserPrivateModel): Promise<PostModel[]> {
    const { id } = user;

    return this.postsLoader.load(id);
  }
}
