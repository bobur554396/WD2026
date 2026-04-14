import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostService} from '../../services/post-service';
import {Post} from '../../models';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  post = signal<Post | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe({
      next: (post) => {
        this.post.set(post);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
