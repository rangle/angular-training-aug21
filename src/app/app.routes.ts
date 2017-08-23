import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { CommentsComponent } from './comments/comments.component';
import { RelatedComponent } from './related/related.component';
import { NewPostComponent } from './new-post/new-post.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  { path: 'posts', component: PostsListComponent },
  {
    path: 'posts/new',
    component: NewPostComponent,
  },
  {
    path: 'posts/:id',
    component: PostContainerComponent,
    children: [
      { path: 'comments', component: CommentsComponent },
      { path: 'related', component: RelatedComponent },
    ]
  },
];
