import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home.component/home.component';
import {AboutComponent} from './pages/about.component/about.component';
import {PostsComponent} from './pages/posts.component/posts.component';
import {NotFoundComponent} from './pages/not-found.component/not-found.component';
import {PostDetailComponent} from './pages/post-detail.component/post-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: '**', component: NotFoundComponent}
];
