import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() language: string;
  @Output() setLanguage = new EventEmitter<string>();

  newLanguage() {
    this.setLanguage.emit(this.language);
  }

  setEnglish() {
    this.language = 'en';
    this.newLanguage();
  }
  setChinese() {
    this.language = 'ch';
    this.newLanguage();
  }

  nameEnglish = 'Kevin Hwang';
  nameChinese = '黃柏愷';

  href = [
    '#work',
    '#education',
    '#projects',
    '#skills',
    '#biography',
    '#hobbies'
  ];
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
