import {Component, inject, OnInit, signal} from '@angular/core';
import {PostsApi} from '../../services/posts-api';
import {Post, Product} from '../../models';
import {ProductsApi} from '../../services/products-api';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productsAPI = inject(ProductsApi);
  products = signal<Product[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true);
    this.productsAPI.getProducts().subscribe({
      next: products => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: error => {
        console.log(error);
        this.loading.set(false);
      }
    })
  }
}
