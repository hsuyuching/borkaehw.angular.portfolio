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

    lang.setSkillTitle('Languages');
    lang.setSkillClass('fa fa-code fa-stack-1x text-primary');
    lang.setSkillItems('Python, C/C++, PHP, Javascript, Java, Matlab, TypeScript, HTML, CSS');

    library.setSkillTitle('DataBase');
    library.setSkillClass('fa fa-database fa-stack-1x text-primary');
    library.setSkillItems('MongoDB, MySQL');

    web.setSkillTitle('Framework');
    web.setSkillItems('Angular, MFC, Node.js');
    web.setSkillClass('fa fa-sitemap fa-stack-1x text-primary');

    tool.setSkillClass('fa fa-wrench fa-stack-1x text-primary');
    tool.setSkillTitle('Library & Tools');
    tool.setSkillItems('AWS EC2, D3, OpenCV, Keras, Tensorflow, PyTorch, Git');
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
