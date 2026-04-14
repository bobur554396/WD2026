import {ChangeDetectorRef, Component, inject, OnInit, signal} from '@angular/core';
import {PostService} from '../../services/post-service';
import {Post} from '../../models';
import {RouterLink} from '@angular/router';
import {PostDetail} from '../post-detail/post-detail';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  private postService = inject(PostService);
  posts = signal<Post[]>([])
  error= signal('');
  loading = signal(false);

  // posts: Post[] = this.postService.getPosts();

  ngOnInit() {
    this.loading.set(true)
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts)
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err);
        this.loading.set(false);
      }
    });
  }
}
