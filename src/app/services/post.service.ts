import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Posts have a body and title. They also have an "author"
 * which is a User instance. This is found by using the
 * `userId`.
 * 
 * @Params
 * 
 * `userId` {number} - User id
 *
 * `id` {number} - Post id
 *
 * `title` {string} - Post title
 *
 * `body` { string} - Post body
 */
export interface Post {
  userId: number;
  id: number; // Post Id
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Get all Posts
   */
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  /**
   * Get a single Post by `postId`
   */
  getPost(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
