import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { ExcerptPipe } from './excerpt.pipe';

import { ApiService } from './api.service';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';
import { routeConfig } from './app.routes';
import { PostContainerComponent } from './post-container/post-container.component';
import { CommentsComponent } from './comments/comments.component';
import { RelatedComponent } from './related/related.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeContainerComponent } from './home-container/home-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    LikeComponent,
    ExcerptPipe,
    PostContainerComponent,
    CommentsComponent,
    RelatedComponent,
    NewPostComponent,
    SearchbarComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
  ],
  providers: [
    ApiService,
    PostsService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
