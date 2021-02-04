import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() language: string;

  shortIntroEnglish = 'Software Engineer';
  nameEnglish = 'Yu-Ching (Ruby) Hsu\'s website';
  shortIntroChinese = '軟體工程師';
  introEnglish = 'Hi, I\'m a self-motivated quick learner. \
  I have hands-on developing experience include Algorithm, Firmware, Image Processing, and data analysis,\
   as well as root cause analysis skill in mixed HW/SW issues.\
   I have 5 years research experience in computer vision, 2 paper published, 3 years experience in machine learning (CNN, Faster-RCNN).\
   I\'m also an illustrator, hope you enjoy the website!';
  introChinese = '我喜歡畫畫，同時也是軟體工程師。擁有5年computer vision的相關研究經歷，3篇論文發表。';
  mobile = '+1 (801) 815-6372';
  email = 'hsuyuching95@gmail.com';
  nameChinese = '許予晴(Ruby Hsu)';
  links = [
    {
      'class': 'linkedin my-link',
      'url': 'https://www.linkedin.com/in/yuchinghsu',
      'iconClass': 'fa fa-linkedin fa-2x'
    }
    ,
    {
      'class': 'github my-link',
      'url': 'https://github.com/hsuyuching',
      'iconClass': 'fa fa-github fa-2x'
    },
    // {
    //   'class': 'youtube my-link',
    //   'url': 'https://www.youtube.com/channel/UCF0isvgYaaTVXBtUihQNiUQ',
    //   'iconClass': 'fa fa-youtube fa-2x'
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}
