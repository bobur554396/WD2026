import {Component, inject, OnInit, signal} from '@angular/core';
import {Product} from '../../models';
import {ProductService} from '../../services/product-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([])
  error= signal('');
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true)
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products)
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err);
        this.loading.set(false);
      }
    });
  }
}
