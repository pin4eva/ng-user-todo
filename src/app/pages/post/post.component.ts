import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  currentPost: Post = {} as Post;
  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {}

  onAddPost(post: Post) {
    this.posts.unshift(post);
  }

  setCurrentPost(post: Post) {
    this.currentPost = post;
  }
}
