import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PostsService {
  postsState = [];

  constructor(private apiService: ApiService) {
    this.getAll();
  }

  getAll() {
    this.apiService.get('/posts')
      .map(posts => posts.map(this.normalizePost))
      .subscribe((posts) => {
        this.postsState = posts;
      });
  }

  normalizePost(post) {
    return Object.assign({}, post, {
      user: 'Robin Darnell',
      date: new Date(),
      likeCount: 0,
    });
  }

}
