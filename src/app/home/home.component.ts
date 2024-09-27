import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  page: number = 1; // Initialize page for pagination
  selectedProduct: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.page).subscribe((data) => {
      this.products = data.products;
    });
  }

  viewDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

  onPageChange(pageNumber: number): void {
    this.page = pageNumber;
    this.loadProducts();
  }

  // Open product details in overlay
  openDetails(product: number): void {
    this.selectedProduct = product;
  }

  // Close product details overlay
  closeDetails(): void {
    this.selectedProduct = null;
  }
}
