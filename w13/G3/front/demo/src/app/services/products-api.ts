import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Product} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  private httpClient = inject(HttpClient);
  BASE_UR = 'http://localhost:8000'; // Django app API

  login(username: string, password: string): Observable<AuthToken> {
    return this.httpClient.post<AuthToken>(`${this.BASE_UR}/api/login/`, {
      username,
      password
    })
  }
  getProducts(): Observable<Product[]> {
    // let token = localStorage.getItem('access');
    // let headers: HttpHeaders = new HttpHeaders({
    //   "Authorization": `Bearer ${token}`
    // })
    // return this.httpClient.get<Product[]>(`${this.BASE_UR}/api/products/`, {
    //   headers
    // });
    return this.httpClient.get<Product[]>(`${this.BASE_UR}/api/products/`)
  }
}
