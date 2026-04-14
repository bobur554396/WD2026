import {Injectable, inject} from '@angular/core';
import {AuthToken, Post} from '../models';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://jsonplaceholder.typicode.com';
  private DJANGO_BASE_URL = 'http://localhost:8000';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.DJANGO_BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}


// export class PostService {
//   private posts: Post[] = [];
//   constructor() {
//     for (let i = 1; i <= 10; i++) {
//       this.posts.push({
//         id: i,
//         title: `Title ${i}`,
//         body: 'Lorem ipsum dolor sit amet...'
//       });
//     }
//   }
//   getPosts(): Post[] {
//     return this.posts;
//   }
//   getPost(id: number): Post | undefined {
//     return this.posts.find(post => post.id === id);
//   }
// }
