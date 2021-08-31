import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { Photo } from 'src/app/models/Photo';
import { User } from 'src/app/models/User';
import { AlbumsService } from 'src/app/services/albums.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  galery = false
  userV = false
  user =new User();
  photos: Photo[] = []
  albums: Album[] = []
  constructor(private albumService: AlbumsService, private userService: UsersService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((res) => this.albums = res)
  }

  galeryView(albumId: number) {
    this.galery = true
    this.albumService.getPhotosByAlbumId(albumId).subscribe( (res) => this.photos = res)
  }
  userView(userId: number) {
    this.userV = true
    this.userService.getUserById(userId).subscribe((res) => this.user = res)
  }
  albumsView() {
    this.userV = false
  }
}
