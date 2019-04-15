import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() section: string;

  sections = {
    'work': {
      'icon': 'fa fa-briefcase fa-1x',
      'head': 'Work Experience',
    },
    'education': {
      'icon': 'fa fa-university fa-1x',
      'head': 'Education',
    },
    'projects': {
      'icon': 'fa fa-laptop fa-1x',
      'head': 'Projects',
    },
    'skills': {
      'icon': 'fa fa-thumbs-o-up fa-1x',
      'head': 'Skills',
    },
    'biography': {
      'icon': 'fa fa-pencil fa-1x',
      'head': 'Biography',
    },
    'hobbies': {
      'icon': 'fa fa-paper-plane-o fa-1x',
      'head': 'Hobbies',
    },
  }

  constructor() { }

  ngOnInit() {
  }

}
