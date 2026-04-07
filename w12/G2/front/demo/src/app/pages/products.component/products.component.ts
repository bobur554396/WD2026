import {Component, inject, signal} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post, Product} from '../../models';
import {RouterLink} from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products.component',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private productService = inject(ProductsService);
  products = signal<Product[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.loading.set(true);
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        // console.log(posts);
        this.products.set(products);
        this.loading.set(false);
      },
      error: (error: Error) => {
        console.log(error);
        // alert(error);
        this.loading.set(false);
      }
    })
  }

}
