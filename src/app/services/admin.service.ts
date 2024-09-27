import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  // Create a product
  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products/add`, product);
  }

  // Update a product
  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${productId}`, product);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
  }

  // Get all products
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  // Get a single product by ID
  getProductById(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${productId}`);
  }
}
