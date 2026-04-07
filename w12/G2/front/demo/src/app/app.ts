import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductsService} from './services/products.service';
import {AuthToken} from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private productService = inject(ProductsService);
  logged = signal<boolean>(false);
  username = ''
  password = ''

  ngOnInit() {
    if (localStorage.getItem('access')) {
      this.logged.set(true);
    }
  }

  login() {
    this.productService.login(this.username, this.password).subscribe({
      next: (authToken: AuthToken) => {
        localStorage.setItem('access', authToken.access);
        localStorage.setItem('refresh', authToken.refresh);
        this.logged.set(true);
        this.username = '';
        this.password = '';
      },
      error: (error: Error) => {
        console.log(error);
      }
    })
  }

  logout() {
    this.logged.set(false);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
