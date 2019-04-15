import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() section: string;
  @Input() language: string;

  sections = {
    'work': {
      'icon': 'fa fa-briefcase fa-1x',
      'headEnglish': 'Work Experience',
      'headChinese': '工作經驗',
    },
    'education': {
      'icon': 'fa fa-university fa-1x',
      'headEnglish': 'Education',
      'headChinese': '學歷',
    },
    'projects': {
      'icon': 'fa fa-laptop fa-1x',
      'headEnglish': 'Projects',
      'headChinese': '專題',
    },
    'skills': {
      'icon': 'fa fa-thumbs-o-up fa-1x',
      'headEnglish': 'Skills',
      'headChinese': '專業技能',
    },
    'biography': {
      'icon': 'fa fa-pencil fa-1x',
      'headEnglish': 'Biography',
      'headChinese': '自傳',
    },
    'hobbies': {
      'icon': 'fa fa-paper-plane-o fa-1x',
      'headEnglish': 'Hobbies',
      'headChinese': '嗜好',
    },
  }

  constructor() { }

  ngOnInit() {
  }

}
