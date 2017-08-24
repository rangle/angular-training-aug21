import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class PostsService {

  // Create the state subject
  private stateSubject = new BehaviorSubject({
    posts: [],
    error: undefined,
  });
  // Publish state subject as an observable
  public state$ = this.stateSubject
    .publishReplay(1)
    .refCount();
  // Selector for accessing state properties
  public posts$ = this.state$.pluck('posts');
  public error$ = this.state$.pluck('error');

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {
    this.getAll();
  }

  getAll() {
    this.apiService.get('/posts')
      .map(posts => posts.map(this.normalizePost))
      .subscribe(
        (posts) => {
          this.stateSubject.next({
            posts: posts,
            error: undefined,
          });
        },
        (err: string) => {
          this.stateSubject.next({
            posts: [],
            error: err,
          });
        },
      );
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
    this.stateSubject.next({
      posts: nextPosts,
      error: undefined,
    });
  }

  addPost(post) {
    this.apiService.post('/posts', post)
      .map(this.normalizePost)
      .subscribe((post) => {
        const currentPosts = this.stateSubject
         .getValue().posts;

        this.stateSubject.next({
          error: undefined,
          posts: [...currentPosts, post]
          // currentPosts.push(post)
          // currentPosts.concat([post])
        });

        this.router.navigate(['/posts']);
      });
  }
}
