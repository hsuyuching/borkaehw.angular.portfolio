import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() language: string;

  shortIntroEnglish = 'Software & Hardware Engineer in Utah';
  shortIntroChinese = '在猶他州的軟體 & 硬體工程師';
  introEnglish = 'Hi, I love music and coding. With 2 master degrees in both Computer Science and Electrical Engineering, I can build a robot, and develop any application run on the top. Enjoy!';
  introChinese = '';
  mobile = '+1 (801) 815-6372';
  email = 'yuching.hsu@utah.edu';
  links = [
    {
      'class': 'linkedin my-link',
      'url': 'https://www.linkedin.com/in/yuchinghsu',
      'iconClass': 'fa fa-linkedin fa-2x'
    }
    // ,
    // {
    //   'class': 'github my-link',
    //   'url': 'https://github.com/borkaehw',
    //   'iconClass': 'fa fa-github fa-2x'
    // },
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
