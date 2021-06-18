import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Very beautiful photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.fineartamerica.com/images-medium-large-5/african-queen-maurice-de-vries.jpg';
  image3 = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a061d024691423.563387d812c3a.jpg';

  constructor() { }

  ngOnInit() {
  }

}