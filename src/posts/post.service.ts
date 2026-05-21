import { PostModel } from './models/post.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private posts: PostModel[] = [
    {
      id: '235453363',
      title: 'string',
      description: 'string',
      userId: '123',
    },
    {
      id: '2354533642',
      title: 'string2',
      description: 'string2',
      userId: '123',
    },
    {
      id: '3454533642',
      title: 'string3',
      description: 'string3',
      userId: '124',
    },
  ];

  findPostByUserIds(userIds: string[]) {
    return this.posts.filter((p: PostModel) => userIds.includes(p.userId));
  }
}
