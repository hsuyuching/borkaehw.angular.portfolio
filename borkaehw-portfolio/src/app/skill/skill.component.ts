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
    let database = new Skill();
    let web = new Skill();
    let tool = new Skill();
    lang.setSkillClass('fa fa-code fa-stack-1x text-primary');
    database.setSkillClass('fa fa-database fa-stack-1x text-primary');
    web.setSkillClass('fa fa-cloud fa-stack-1x text-primary');
    tool.setSkillClass('fa fa-wrench fa-stack-1x text-primary');
    lang.setSkillTitle('Languages');
    database.setSkillTitle('Databases');
    web.setSkillTitle('Web');
    tool.setSkillTitle('Tools');
    lang.setSkillItems('Python, Scala, Java, Golang, C/C++');
    database.setSkillItems('SQL, Oracle SQL*Plus, MySQL');
    web.setSkillItems('Angular, TypeScript, HTML, CSS, JavaScript (jQuery, D3.js), Bootstrap, PHP (CodeIgniter)');
    tool.setSkillItems('Bazel, Git');
    this.skills.set('lang', lang);
    this.skills.set('database', database);
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
