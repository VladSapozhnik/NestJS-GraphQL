import DataLoader from 'dataloader';
import { PostModel } from '../models/post.model';

export function createPostsLoader(postService: any) {
  return new DataLoader(async (userIds: string[]) => {
    const posts = await postService.findByUserIds(userIds);

    // группируем по userId
    return userIds.map((id: string) =>
      posts.filter((p: PostModel) => p.userId === id),
    );
  });
}
