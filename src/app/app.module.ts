import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Angular Material Form Field
import { MatInputModule } from '@angular/material/input'; // Angular Material Input
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { BlogPostListComponent } from './blog-posts/blog-post-list/blog-post-list.component';
import { BlogPostDetailsComponent } from './blog-posts/blog-post-details/blog-post-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    BlogPostListComponent,
    BlogPostDetailsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule, // Import MatFormFieldModule
    MatInputModule, // Import MatInputModule for input fields
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
