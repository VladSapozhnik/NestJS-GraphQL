import { PostModel } from './models/post.model';

export class PostService {
  private posts: PostModel[] = [];

  findByUserIds(userIds: string[]) {
    return this.posts.filter((p: PostModel) => userIds.includes(p.userId));
  }
}
