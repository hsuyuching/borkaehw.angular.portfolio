import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // @Input() name: string;

  // imagePosts = new Map<string, ImagePost>();
  // constructor() {
  //   let imgpost1 = new ImagePost();
  //   imgpost1.setImageSrc('')
  //   this.imagePosts.set('imgpost1', imgpost1);

  // }

  ngOnInit() {
  }

}
class ImagePost {
  ImageSrc: string

  constructor() {}
  setImageSrc(ImageSrc: string){
    this.ImageSrc = ImageSrc;
  }
  getImageSrc(){
    return this.ImageSrc
  }

}
