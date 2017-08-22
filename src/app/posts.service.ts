import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostsService {

  // Create the state subject
  private stateSubject = new BehaviorSubject({
    posts: []
  });
  // Publish state subject as an observable
  public state$ = this.stateSubject
    .publishReplay(1)
    .refCount();
  // Selector for accessing state properties
  public posts$ = this.state$.pluck('posts');

  constructor(private apiService: ApiService) {
    this.getAll();
  }

  getAll() {
    this.apiService.get('/posts')
      .map(posts => posts.map(this.normalizePost))
      .subscribe((posts) => {
        console.log(posts);
        this.stateSubject.next({
          posts: posts,
        });
      });
  }

  normalizePost(post) {
    return Object.assign({}, post, {
      user: 'Robin Darnell',
      date: new Date(),
      likeCount: 0,
    });
  }

  updateLike(id) {
    // get current state
     const posts = this.stateSubject
      .getValue()
      .posts;
    // update like count for one post object
    const nextPosts = posts.map(post => {
      if (post.id === id) {
        post.likeCount++;
      }

      return post;
    });
    // push the state to the observable
    this.stateSubject.next({ posts: nextPosts });
  }

}
