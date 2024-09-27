import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  category: string = '';
  products: Product[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['id'];
      this.fetchCategoryProducts();
    });
  }

  fetchCategoryProducts(): void {
    this.categoryService.getCategoryProducts(this.category).subscribe(
      (response: any) => {
        this.products = response.products; // Extract the 'products' array
        // console.log('Products:', this.products); // Verify this is an array
      },
      (error) => {
        this.errorMessage = `Error fetching products for category ${this.category}`;
        console.error(error);
      }
    );
  }
}
