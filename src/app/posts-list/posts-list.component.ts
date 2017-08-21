import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  count = 0;
  posts = [{
    title: 'Post Title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    user: 'Robin Darnell',
    date: new Date(),
    likeCount: 0
  }, {
    title: 'Post Title 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    user: 'Robin Darnell',
    date: new Date(),
    likeCount: 0
  }, {
    title: 'Post Title 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    user: 'Robin Darnell',
    date: new Date(),
    likeCount: 0
  }];

  constructor() {
    setInterval(() => {
      this.count++;
    }, 500)
  }

  ngOnInit() {
  }

}
