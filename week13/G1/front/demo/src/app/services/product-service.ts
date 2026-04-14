import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }

}
