import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() name: string;

  works = new Map<string, Work>();

  constructor() {

    let logi = new Work();
    logi.setOrgLogoPath('assets/img/logitech-logo.png');
    logi.setOrgName('Logitech, Inc.');
    logi.setOrgLocation('Hsinchu', 'Taiwan', 'R.O.C');
    logi.setWorkPeriod('July 2018', 'September 2018');
    logi.setDescription(jobDescription['logi']);
    logi.setLinks('https://www.logitech.com/en-us', 'logitech.com');
    this.works.set('logi', logi);

  }

  ngOnInit() {
  }

}

class Work {
  orgLogoPath: string;
  orgName: string;
  orgCity: string;
  orgState: string;
  orgCountry: string;
  startDate: string;
  endDate: string;
  description: string;
  links = [];

  constructor() {}

  setOrgLogoPath(orgLogoPath: string) {
    this.orgLogoPath = orgLogoPath;
  }
  getOrgLogoPath() {
    return this.orgLogoPath;
  }
  setOrgName(orgName: string) {
      this.orgName = orgName;
  }
  getOrgName() {
    return this.orgName;
  }
  setOrgLocation(orgCity: string, orgState: string, orgCountry: string) {
    this.orgCity = orgCity;
    this.orgState = orgState;
    this.orgCountry = orgCountry;
  }
  getOrgLocationString() {
    return `${ this.orgCity }, ${ this.orgState }, ${ this.orgCountry }`;
  }
  setWorkPeriod(startDate: string, endDate: string = 'Present') {
    this.startDate = startDate;
    this.endDate = endDate;
  }
  getWorkPeriod() {
    return `${ this.startDate } - ${ this.endDate }`;
  }
  setDescription(description: string) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }
  setLinks(link: string, linkName: string) {
    this.links.push({
      'link': link,
      'linkName': linkName
    });
  }
  getLinks() {
    return this.links;
  }
}

let jobDescription = {
  'logi': '<li>Developed a real-time data visualization platform to accelerate the development process for image quality tuning with MVC pattern.</li>\
          <li>Extended compatibility of the platform to any Logitect camera by designing a byte-mapping configuration mechanism in firmware.</li>\
          <li>Converted MATLAB code into Python and performed unit tests to verify the both versions.</li>\
          <li>Developed a human face detection algorithm to improve the auto focus.</li>',
          }

