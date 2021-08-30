import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  posts: Post[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPosts().subscribe((res) => {
        res.forEach((p) => {
          if (p.userId == params['id']) {
            this.posts.push(p)
          }
        })
      })
    })
  }

}
