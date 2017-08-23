import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {
  post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    const id$ = this.route.params
      .pluck('id')
      .map(id => +id);

    Observable.combineLatest(
      id$,
      this.postsService.posts$
    )
    .map(this.findPost)
    .subscribe((post) => {
      this.post = post;
    });
  }

  findPost([id, posts]) {
    return posts.find(post => post.id === id);
  }

}
