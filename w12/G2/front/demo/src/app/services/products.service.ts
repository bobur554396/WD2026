import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    return this.http.get<Product[]>(`${this.API_URL}/api/products/`);
  }
}
