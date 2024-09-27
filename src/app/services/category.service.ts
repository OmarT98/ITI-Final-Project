import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://dummyjson.com'; // Base API URL

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/products/categories`).pipe(
      catchError((error) => {
        console.error('Error fetching categories:', error);
        return throwError(error);
      })
    );
  }

  getCategoryProducts(category: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiUrl}/products/category/${category}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Error fetching products for category ${category}:`,
            error
          );
          return throwError(error);
        })
      );
  }
}
