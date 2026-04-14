import {Component, inject, OnInit, signal} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Post} from '../../models';

@Component({
  selector: 'app-post-detail.component',
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  private postService = inject(PostsService);
  private route = inject(ActivatedRoute);
  // post?: Post;
  post = signal<Post | undefined>(undefined);
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe({
      next: (post: Post) => {
        this.post.set(post);
        this.loading.set(false);
      },
      error: (error: Error) => {
        console.log(error);
        this.loading.set(false);
      }
    })
  }
}
