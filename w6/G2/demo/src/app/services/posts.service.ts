import { Injectable, inject } from '@angular/core';
import {Post} from '../models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);
  API_URL = 'https://jsonplaceholder.typicode.com';
  // API_URL = 'http://localhost:8000/api';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}/posts`);
  }

  getPost(id: number): Observable<Post>  {
    return this.http.get<Post>(`${this.API_URL}/posts/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.API_URL}/posts`, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.API_URL}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/posts/${id}`);
  }
}


// export class PostsService {
//   posts: Post[] = [];
//
//   constructor() {
//     for (let i = 1; i <= 10; i++) {
//       this.posts.push({
//         id: i,
//         title: `Title: ${i}`,
//         body: `Body: ${i} - long text`,
//       })
//     }
//   }
//
//   getPosts(): Post[] {
//     return this.posts;
//   }
//
//   getPost(id: number): Post | undefined {
//     return this.posts.find(post => post.id === id);
//   }
// }

