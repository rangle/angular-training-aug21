import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  addNewPost(newPost) {
    this.postsService.addPost({
      ...newPost,
      user: 1
    });
  }

}
