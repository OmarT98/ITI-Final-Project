import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { BlogPostListComponent } from './blog-posts/blog-post-list/blog-post-list.component';
import { BlogPostDetailsComponent } from './blog-posts/blog-post-details/blog-post-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Login page is public
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protect home with AuthGuard
  {
    path: 'products',
    component: ProductListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'categories/:id',
    component: CategoryDetailsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'blog', // Consider changing to 'blog-posts' for consistency
    component: BlogPostListComponent, // Blog list page
    // canActivate: [AuthGuard],
  },
  {
    path: 'blog/:id',
    component: BlogPostDetailsComponent, // Blog post details page
    // canActivate: [AuthGuard],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default to login page
  { path: '**', redirectTo: '/login' }, // Wildcard route to catch undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
