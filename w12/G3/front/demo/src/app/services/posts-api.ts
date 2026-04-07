import {Injectable, inject} from '@angular/core';
import {Post} from '../models';
import {Posts} from '../pages/posts/posts';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsApi {
  private httpClient = inject(HttpClient);
  // BASE_UR = 'http://localhost:8000/api'; // Django app API
  BASE_UR = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BASE_UR}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.BASE_UR}/posts/${id}`);
  }

  createPost(post: Post) {
    return this.httpClient.post<Post>(`${this.BASE_UR}/posts`, post);
  }

  updatePost(id: number, post: Post) {
    return this.httpClient.put(`${this.BASE_UR}/posts/${id}`, post);
  }

  deletePost(id: number) {
    return this.httpClient.delete(`${this.BASE_UR}/posts/${id}`);
  }

}
