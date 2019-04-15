import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() language: string;

  nameEnglish = 'Kevin Hwang';
  nameChinese = '黃柏愷';
  shortIntroEnglish = 'A software engineer in Salt Lake City, Utah';
  shortIntroChinese = '在鹽湖城的軟體工程師';
  introEnglish = 'Hello, I am Kevin. I love to write codes, take photos, and make videos. I also have a Youtube channel for all the travel vlogs.';
  introChinese = '大家好我是柏愷。我喜歡寫程式、拍照、剪輯影片。我甚至有一個自己的關於旅遊的Youtube頻道。';
  mobile = '+1 (734) 548-7072';
  email = 'borkaehw@umich.edu';
  links = [
    {
      'class': 'linkedin my-link',
      'url': 'https://www.linkedin.com/in/borkaehwang',
      'iconClass': 'fa fa-linkedin fa-2x'
    },
    {
      'class': 'github my-link',
      'url': 'https://github.com/borkaehw',
      'iconClass': 'fa fa-github fa-2x'
    },
    {
      'class': 'youtube my-link',
      'url': 'https://www.youtube.com/channel/UCF0isvgYaaTVXBtUihQNiUQ',
      'iconClass': 'fa fa-youtube fa-2x'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
