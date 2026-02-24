import {Injectable, inject} from '@angular/core';
import {Post} from '../models';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`);
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
