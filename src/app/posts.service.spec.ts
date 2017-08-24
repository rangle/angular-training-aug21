import { PostsService } from './posts.service';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const mockApiService = {
  get: () => Observable.of([]),
} as any;
const mockRouter = {} as Router;

fdescribe('PostsService', () => {
  let postsService;

  beforeEach(() => {
    postsService = new PostsService(
      mockApiService,
      mockRouter
    );
  });

  it('should normalize post', () => {
    const post = {
      id: 1,
      title: 'post title',
      body: 'Lorem ipsum dolor sit amet',
      user: 0,
    };

    const result = postsService.normalizePost(post);
    expect(result).toEqual({
      id: 1,
      title: 'post title',
      body: 'Lorem ipsum dolor sit amet',
      user: 'Robin Darnell',
      date: new Date(),
      likeCount: 0,
    });
  });

  it('should filter posts by query', () => {
    const posts = [{ title: 'a' }, { title: 'b' }, { title: 'c' }];

    const result = postsService.filterPosts({
      posts,
      query: 'b'
    });

    expect(result).toEqual([{ title: 'b' }]);
  });

  it('should get all posts', () => {
    const spy = spyOn(mockApiService, 'get').and.returnValue(Observable.of([]));
    postsService.getAll();

    expect(spy.calls.any()).toBeTruthy;
    expect(spy.calls.count()).toBe(1);
    expect(spy.calls.argsFor(0)).toEqual(['/posts']);
  });
});
