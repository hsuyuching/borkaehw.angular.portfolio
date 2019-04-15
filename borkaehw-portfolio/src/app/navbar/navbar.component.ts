import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() language: string;

  nameEnglish = 'Kevin Hwang';
  nameChinese = '黃柏愷';

  categoriesEnglish = [
    'Work',
    'Education',
    'Projects',
    'Skills',
    'Biography',
    'Hobbies'
  ];
  categoriesChinese = [
    '工作經驗',
    '學歷',
    '專題',
    '專業技能',
    '自傳',
    '嗜好'
  ];

  constructor() { }

  ngOnInit() {
  }

}
