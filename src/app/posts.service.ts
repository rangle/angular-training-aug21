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
    query: '',
    page: 1,
  });
  // Publish state subject as an observable
  public state$ = this.stateSubject
    .publishReplay(1)
    .refCount();
  // Selector for accessing state properties
  public posts$ = this.state$.pluck('posts');
  public error$ = this.state$.pluck('error');
  public filteredPosts$ = this.state$.map(this.filterPosts);

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {
    this.getAll();
  }

  filterPosts({ query, posts }) {
    return posts.filter(post => {
      return post.title
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  normalizePost(post) {
    return Object.assign({}, post, {
      user: 'Robin Darnell',
      date: new Date(),
      likeCount: 0,
    });
  }

  updateState(newState) {
    const currentState = this.stateSubject.getValue();
    const nextState = { ...currentState, ...newState };
    this.stateSubject.next(nextState);
  }

  getAll() {
    this.apiService.get('/posts')
      .map(posts => posts.map(this.normalizePost))
      .subscribe(
        (posts) => {
          this.updateState({ posts: posts });
        },
        (err: string) => {
          this.updateState({ error: err });
        },
      );
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
    this.updateState({ posts: nextPosts });
  }

  addPost(post) {
    this.apiService.post('/posts', post)
      .map(this.normalizePost)
      .subscribe((post) => {
        const currentPosts = this.stateSubject
         .getValue().posts;

        this.updateState({
          posts: [...currentPosts, post],
        });

        this.router.navigate(['/posts']);
      });
  }

  updateQuery(query) {
    this.updateState({ query: query });
  }
}
