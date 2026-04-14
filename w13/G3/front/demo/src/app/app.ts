import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductsApi} from './services/products-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  productsAPI = inject(ProductsApi);
  logged = signal<boolean>(false);
  username = ''
  password = ''

  ngOnInit() {
    if(localStorage.getItem('access')){
      this.logged.set(true);
    }
  }

  login() {
    this.productsAPI.login(this.username, this.password).subscribe({
      next: authToken => {
        // console.log(authToken);
        localStorage.setItem('access', authToken.access);
        localStorage.setItem('refresh', authToken.refresh);
        this.logged.set(true);
        this.username = '';
        this.password = '';
      },
      error: error => {
        console.log(error)
      }
    })
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.logged.set(false);
  }
}
