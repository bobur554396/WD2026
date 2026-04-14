import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PostService} from './services/post-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private postService = inject(PostService);
  logged = signal<boolean>(false);
  username = '';
  password = '';

  ngOnInit() {
    if(localStorage.getItem('access')){
      this.logged.set(true);
    }
  }

  login() {
    this.postService.login(this.username, this.password).subscribe({
      next: (authToken) => {
        localStorage.setItem('access', authToken.access);
        localStorage.setItem('refresh', authToken.refresh);
        this.logged.set(true);
        this.username = '';
        this.password = '';
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  logout() {
    this.logged.set(false);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
