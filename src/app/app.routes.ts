import { Routes } from '@angular/router';
import { PostContainerComponent } from './post-container/post-container.component';
import { CommentsComponent } from './comments/comments.component';
import { RelatedComponent } from './related/related.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HomeContainerComponent } from './home-container/home-container.component'

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  { path: 'posts', component: HomeContainerComponent },
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
