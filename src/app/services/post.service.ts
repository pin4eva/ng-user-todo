import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[] = [];
  constructor(private readonly http: HttpClient) {
    this.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post);
  }
}
