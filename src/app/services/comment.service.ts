import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comment {
  postId: number;
  id: number; // Comment Id
  name: string;
  email: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Gets Comments for all Posts
   */
  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  /**
   * Gets Comments for a single Post by `postId`
   */
  getComments(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
