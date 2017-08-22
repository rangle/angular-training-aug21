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
  providers: [ApiService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
