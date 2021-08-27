import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  postsfilter: Post[] = []
  users: Map<number, string> = new Map<number, string>();
  term = "";
  field = "id";
  filtering = false
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
      this.term == "" ? this.postsfilter = this.posts : null
      for (const post of this.posts) {
        var userbyId = localStorage.getItem(`${post.userId}`)
        if (userbyId) {
          var user: User = JSON.parse(userbyId)
          this.users.set(user.id, user.username)
        }
      }
    })
  }

  filter() {
    this.filtering = true
    var postFound: Post[] = []
    if (this.field === 'title') {
      this.posts.forEach((p) => {
        let position = p.title.toLowerCase().indexOf(this.term.toLowerCase())
        if (position !== -1) {
          postFound.push(p)
        }
      })
    }
    if (this.field === 'id') {
      this.posts.forEach((p) => (p.userId === parseInt(this.term)) ? postFound.push(p) : console.log(`${p.userId}`))
    }
    this.postsfilter = postFound
  }
}
