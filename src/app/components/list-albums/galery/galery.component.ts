import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  viewPhoto = false
  @Input() photo = new Photo();
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
  }

  fullPhoto(){
    this.viewPhoto = !this.viewPhoto
  }

  deletePhoto(){
    this.albumService.deletephoto(1).subscribe((res) => console.log(res))
  }
}
