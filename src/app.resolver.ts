import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AppService } from './app.service';
import { UserPublicModel } from './models/user-public.model';
import { CreateUserInput } from './dto/create-user.input';
import { UserPrivateModel } from './models/user-private.model';
import { PostModel } from './models/post.model';

@Resolver(() => UserPublicModel)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => UserPublicModel)
  addUser(@Args('user') user: CreateUserInput): UserPublicModel {
    return this.appService.createUser(user);
  }

  @Query(() => String)
  getMain() {
    return this.appService.getHello();
  }

  @ResolveField(() => PostModel)
  getUsers(@Parent() user: UserPublicModel): UserPublicModel[] {
    return this.appService.getUsers();
  }

  @Query(() => [UserPrivateModel])
  getUsersPrivate(): UserPrivateModel[] {
    return this.appService.getUsers();
  }
}
