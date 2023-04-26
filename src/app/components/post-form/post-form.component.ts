import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post = {} as Post;

  constructor(private readonly postService: PostService) {}
  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    const post = form.value as Post;
    this.postService.addPost(post).subscribe((post) => this.newPost.emit(post));
    form.reset();
  }
}
