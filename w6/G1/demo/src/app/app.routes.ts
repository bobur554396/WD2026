import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Posts} from './pages/posts/posts';
import {PostDetail} from './pages/post-detail/post-detail';
import {NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home, title: 'Home'},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  {path: 'posts', component: Posts},
  {path: 'posts/:id', component: PostDetail},
  {path: '**', component: NotFound}
];
