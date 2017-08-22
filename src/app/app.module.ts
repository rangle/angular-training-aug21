import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { ExcerptPipe } from './excerpt.pipe';

import { ApiService } from './api.service';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    LikeComponent,
    ExcerptPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ApiService,
    PostsService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
