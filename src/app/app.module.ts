import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { ExcerptPipe } from './excerpt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    LikeComponent,
    ExcerptPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
