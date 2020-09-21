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

    // let itri = new Work();
    // itri.setOrgLogoPath('assets/img/itri-logo.jpg');
    // itri.setOrgName('Industrial Technology Research Institute (ITRI)');
    // itri.setOrgLocation('Hsinchu', 'Taiwan', 'R.O.C');
    // itri.setWorkPeriod('May 2016');
    // itri.setDescription(jobDescription['itri']);
    // itri.setLinks('https://www.if.itri.org.tw/', 'if.itri.org.tw');
    // this.works.set('itri', itri);

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
  'logi': 'Developed Logitech’s internal analysis tool for image quality team to better control auto focus, auto white balance, auto exposure. Achieved real-time manipulation in video between hardware control and software visualization. Researched and developed computer vision algorithms centered around the human face detection.',
  // 'itri': 'Illustrator of the journal: Industry and Management Forum. I designed the cover and the journal paper illustrations to visualize the link between IT and image.'
  // 'clinc': 'I worked as a software engineer intern. Clinc is a startup in Ann Arbor, MI. their main focus is on personal financial assistant called Finie, which is a combination of \"Financial\" and \"Genie\". The reason why Finie is special is that people can use colloquial sentences to interact with Finie, even though there are some grammar mistakes or vague expressions in your sentences, Finie can understand it just like you are talking to a human being.<br>During the intern, I joined a project team called Finie for the Family. There are three major accomplishments for myself. The first one is building a monthly  budget tracking feature. Budgeting feature allows user to set a spending limit based either on certain categories or in general, it prevents users to overspend with next purchase. Besides creating a spending limit, users can modify their current amount or remove it. Finie can also give you spending advice based on the budget you have. The other similar is built on top of Finie, while we focused more on family assistant. Besides budgeting as a basic function, every family member could edit common shopping lists, or send notifications to family member. The last project is small but also exciting, I designed a web-app based chatbot to display the conversation between user and Finie.<br>Through out my intern, I used mostly Python as back-end language and Javascript as front-end language. Besides the feature designs as I mentioned above, I also had experience collecting crowd data by using Amazon Mechanical Turk, feeding data to machine learning model. For the back-end part, I used Django, an open source web framework written in Python, to interact with database.'
}
