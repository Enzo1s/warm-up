import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from 'src/app/models/Album';
import { User } from 'src/app/models/User';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  @Input() user = new User();
  newAlbum = new Album();
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
  }
  createAlbum(f:NgForm){
    this.newAlbum.userId = this.user.id;
    this.albumService.createAlbum(this.newAlbum)
  }
}
