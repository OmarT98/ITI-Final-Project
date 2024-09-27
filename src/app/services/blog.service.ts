import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  // Fetch paginated blog posts
  getBlogPosts(page: number = 1, limit: number = 10): Observable<any> {
    // Check if the API supports pagination
    return this.http.get<any>(
      `${this.apiUrl}?limit=${limit}&skip=${(page - 1) * limit}`
    );
  }

  // Fetch blog post details by ID
  getPostDetails(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${postId}`);
  }

  // Fetch comments for a blog post by post ID
  getComments(postId: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/comments/post/${postId}`);
  }
}
