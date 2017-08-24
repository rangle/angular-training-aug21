import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  posts = [];
  error = undefined;
  subscriptions = [];

  constructor(
    public postsService: PostsService
  ) { }

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
    });
  }

}
