import {Component, inject, OnInit, signal} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-posts.component',
  imports: [RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  private postService = inject(PostsService);
  // posts: Post[] = this.postService.getPosts();
  // posts: Post[] = [];
  posts = signal<Post[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true);
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        // console.log(posts);
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: (error: Error) => {
        console.log(error);
        this.loading.set(false);
      }
    })
  }
}
