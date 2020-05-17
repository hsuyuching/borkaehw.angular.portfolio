import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() name: string;

  skills = new Map<string, Skill>();

  constructor() {
    let lang = new Skill();
    // let database = new Skill();
    let web = new Skill();
    let tool = new Skill();
    let library = new Skill();

    lang.setSkillClass('fa fa-code fa-stack-1x text-primary');
    library.setSkillClass('fa fa-database fa-stack-1x text-primary');
    web.setSkillClass('fa fa-cloud fa-stack-1x text-primary');
    tool.setSkillClass('fa fa-wrench fa-stack-1x text-primary');
    lang.setSkillTitle('Languages');
    library.setSkillTitle('Library');
    web.setSkillTitle('Web');
    tool.setSkillTitle('Tools');
    lang.setSkillItems('Python, C/C++, Javascript, Matlab');
    library.setSkillItems('OpenCV, Keras, Tensorflow');
    web.setSkillItems('HTML, CSS, D3, Bootstrap');
    tool.setSkillItems('Git, MFC(visual studio), Galago');
    this.skills.set('lang', lang);
    this.skills.set('library', library);
    this.skills.set('web', web);
    this.skills.set('tool', tool);



  }

  ngOnInit() {
  }

}

class Skill {
  skillClass: string;
  skillTitle: string;
  skillItems: string;

  setSkillClass(skillClass: string) {
    this.skillClass = skillClass;
  }
  getSkillClass() {
    return this.skillClass;
  }
  setSkillTitle(skillTitle: string) {
    this.skillTitle = skillTitle;
  }
  getSkillTitle() {
    return this.skillTitle;
  }
  setSkillItems(skillItems: string) {
    this.skillItems = skillItems;
  }
  getSkillItems() {
    return this.skillItems;
  }
}
