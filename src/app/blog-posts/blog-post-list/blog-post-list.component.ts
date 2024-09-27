import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
})
export class BlogPostListComponent implements OnInit {
  posts: any[] = [];
  page: number = 1; // Current page
  limit: number = 10; // Number of posts per page
  totalPosts: number = 0; // Total number of posts from the API
  loading: boolean = true; // Loading indicator

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true; // Set loading to true before fetching
    this.blogService.getBlogPosts(this.page, this.limit).subscribe(
      (data) => {
        this.posts = data.posts; // Store the fetched posts
        this.totalPosts = data.total; // Get the total number of posts
        this.loading = false; // Set loading to false after fetching
      },
      (error) => {
        console.error('Error loading posts:', error);
        this.loading = false; // Set loading to false even if there's an error
      }
    );
  }

  viewDetails(postId: number): void {
    this.router.navigate(['/blog', postId]); // Navigate to post details
  }

  onPageChange(pageNumber: number): void {
    this.page = pageNumber; // Update the current page
    this.loadPosts(); // Fetch posts for the new page
  }
}
