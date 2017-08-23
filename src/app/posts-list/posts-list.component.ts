import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts = [];
  error = undefined;
  subscriptions = [];

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit() {
    const errorSubscription = this.postsService.error$
      .subscribe(err => {
        this.error = err;
      });

    this.subscriptions.push(errorSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
