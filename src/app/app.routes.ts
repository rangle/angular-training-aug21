import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostContainerComponent } from './post-container/post-container.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostContainerComponent },
];
