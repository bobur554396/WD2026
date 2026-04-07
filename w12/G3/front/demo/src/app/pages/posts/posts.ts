import {Component, inject, OnInit, signal} from '@angular/core';
import {Post} from '../../models';
import {PostsApi} from '../../services/posts-api';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  private postAPI = inject(PostsApi);
  // posts: Post[] = [];
  posts = signal<Post[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true);
    this.postAPI.getPosts().subscribe({
      next: posts => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: error => {
        console.log(error);
        this.loading.set(false);
      }
    })
  }

}
