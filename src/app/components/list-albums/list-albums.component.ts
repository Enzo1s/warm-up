import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { Photo } from 'src/app/models/Photo';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  galery = false
  photos: Photo[] = []
  albums: Album[] = []
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((res) => this.albums = res)
  }

  galeryView(albumId: number) {
    this.galery = true
    this.albumService.getPhotosByAlbumId(albumId).subscribe( (res) => this.photos = res)
  }
}
