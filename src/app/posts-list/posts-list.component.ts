import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts = [];

  constructor(
    private postsService: PostsService
  ) {}

  updateLike(count, post) {
    post.likeCount = count;
  }

  ngOnInit() {
    this.posts = this.postsService.postsState;
  }
}
