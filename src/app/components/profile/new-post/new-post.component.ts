import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @Input() user = new User();
  newPost = new Post();
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  createPost(f:NgForm) {
    this.newPost.userId = this.user.id;
    this.postService.createPost(this.newPost).subscribe((res) => {
      console.log(res)
      f.reset();
    });
  }
}
