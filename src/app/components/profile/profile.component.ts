import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  newPost = new Post();
  posts: Post[] = []
  view = ""
  constructor(
    private userService: UsersService,
    private postService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLogged') === "true") {
      var username = sessionStorage.getItem('user');
      var userLogin = this.userService.getUserByUsername(username ? username : "")
      this.user = userLogin ? userLogin : new User();
      this.postService.getPostByUserId(this.user.id).subscribe((res) => this.posts = res)
      /* this.postService.getPostByUserId(1).subscribe((res) => this.posts = res) */
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you are not logged in (redirect)',
      })
      this.router.navigate(['/home'])
    }
  }

  onClick(value: string) {
    this.view = value;
    console.log(this.view)
  }

  createPost(f:NgForm) {
    this.postService.createPost(this.newPost).subscribe((res) => {
      console.log(res)
      f.reset();
    });
  }
}
