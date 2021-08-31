import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/Album';
import { Post } from 'src/app/models/Post';
import { ToDos } from 'src/app/models/ToDos';
import { User } from 'src/app/models/User';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostsService } from 'src/app/services/posts.service';
import { ToDoService } from 'src/app/services/to-do.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  posts: Post[] = []
  albums: Album[] = []
  toDos: ToDos[] = []
  view = ""
  constructor(
    private userService: UsersService,
    private postService: PostsService,
    private albumService: AlbumsService,
    private toDoService: ToDoService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLogged') === "true") {
      var username = sessionStorage.getItem('user');
      var userLogin = this.userService.getUserByUsername(username ? username : "")
      this.user = userLogin ? userLogin : new User();
      this.postService.getPostByUserId(this.user.id).subscribe((res) => this.posts = res);
      this.albumService.getAlbumsByUserId(this.user.id).subscribe((res) => this.albums = res);
      this.toDoService.getToDosByUser(this.user.id).subscribe((res) => this.toDos = res)
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

}
