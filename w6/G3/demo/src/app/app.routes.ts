import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Posts} from './pages/posts/posts';
import {NotFound} from './pages/not-found/not-found';
import {PostDetail} from './pages/post-detail/post-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'posts', component: Posts},
  {path: 'posts/:id', component: PostDetail},
  {path: '**', component: NotFound}
];
