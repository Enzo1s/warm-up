import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent implements OnInit {

  @Input() album = new Album();
  constructor() { }

  ngOnInit(): void {
  }

}
