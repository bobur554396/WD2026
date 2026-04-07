import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostsApi} from '../../services/posts-api';
import {Post} from '../../models';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private postAPI = inject(PostsApi);
  post = signal<Post | undefined>(undefined);
  loading = signal(false);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading.set(true);
    this.postAPI.getPost(id).subscribe({
      next: post => {
        this.post.set(post);
        this.loading.set(false);
      },
      error: error => {
        console.log(error);
        this.loading.set(false);
      }
    })
  }
}
