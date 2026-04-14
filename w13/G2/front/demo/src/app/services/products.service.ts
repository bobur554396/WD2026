import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Product} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  API_URL = 'http://localhost:8000';

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.API_URL}/api/login/`, {
      // "username": username,
      // "password": password
      username,
      password
    })
  }

  getProducts(): Observable<Product[]> {
    // let token = localStorage.getItem('access');
    // let headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // })
    // return this.http.get<Product[]>(`${this.API_URL}/api/products/`, {
    //   headers
    // });
    return this.http.get<Product[]>(`${this.API_URL}/api/products/`)

  }

  // createProduct(product: Product): Observable<Product>{
  //   return this.http.post<Product>(`${this.API_URL}/api/products/`, {
  //     product
  //   })
  // }
}
