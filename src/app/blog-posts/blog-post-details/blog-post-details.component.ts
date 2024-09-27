import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service'; 


@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.css'],
})
export class BlogPostDetailsComponent implements OnInit {
  postId!: number;
  post: any;
  comments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    // Get the post ID from the route parameters
    this.postId = +this.route.snapshot.params['id'];

    // Fetch the blog post details
    this.getPostDetails(this.postId);

    // Fetch the comments for this post
    this.getPostComments(this.postId);
  }

  // Method to fetch the post details
  getPostDetails(id: number): void {
    this.blogService.getPostDetails(id).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        console.error('Error fetching post details:', error);
      }
    );
  }

  // Method to fetch the first 5 comments for the post
  getPostComments(id: number): void {
    this.blogService.getComments(id).subscribe(
      (data) => {
        this.comments = data.comments.slice(0, 5); // Fetch first 5 comments
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}