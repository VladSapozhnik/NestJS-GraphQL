import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { PostModel } from '../posts/models/post.model';
import { PostsLoader } from '../loaders/posts.loader';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly appService: UsersService,
    private readonly postsLoader: PostsLoader,
  ) {}

  @Mutation(() => UserModel)
  addUser(@Args('user') user: CreateUserInput): UserModel {
    return this.appService.createUser(user);
  }

  @Query(() => [UserModel])
  getUsers() {
    return this.appService.getUsers();
  }

  @ResolveField(() => [PostModel], { name: 'posts' })
  async getPosts(@Parent() user: UserModel): Promise<PostModel[]> {
    const { id } = user;

    return this.postsLoader.load(id);
  }
}
