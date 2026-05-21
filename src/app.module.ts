import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersResolver } from './users/users.resolver';
import { join } from 'path';
import { PostService } from './posts/post.service';
import { PostsLoader } from './loaders/posts.loader';
import { UsersPrivateResolver } from './users/users-private.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    UsersResolver,
    UsersPrivateResolver,
    UsersService,
    PostService,
    PostsLoader,
  ],
})
export class AppModule {}
