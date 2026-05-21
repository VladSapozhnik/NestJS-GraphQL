import DataLoader from 'dataloader';
import { PostService } from '../posts/post.service';
import { PostModel } from '../posts/models/post.model';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class PostsLoader {
  public readonly loader: DataLoader<string, PostModel[]>;

  constructor(private postService: PostService) {
    this.loader = new DataLoader(async (userIds: readonly string[]) => {
      const posts = this.postService.findPostByUserIds([...userIds]);

      return Promise.resolve(
        userIds.map((userId) => posts.filter((post) => post.userId === userId)),
      );
    });
  }

  load(userId: string) {
    return this.loader.load(userId);
  }
}
// export function createPostsLoader(postService: PostService) {
//   return new DataLoader<string, PostModel[]>((userIds: readonly string[]) => {
//     const posts = postService.findPostByUserIds([...userIds]);
//
//     return Promise.resolve(
//       userIds.map((userId) => posts.filter((post) => post.userId === userId)),
//     );
//   });
// }
