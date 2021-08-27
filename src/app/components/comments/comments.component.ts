import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  user = new User();
  post = new Post();
  comments: Comment[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.commentService.getCommentsByPost(parseInt(params['id'])).subscribe((res) => {
        this.comments = res;
      })
      this.commentService.getPostComment(parseInt(params['id'])).subscribe((res) => {
        this.post = res;
        var userbyId = localStorage.getItem(`${this.post.userId}`)
        if (userbyId) {
          this.user = JSON.parse(userbyId)
        }
      })

    })

  }

}
