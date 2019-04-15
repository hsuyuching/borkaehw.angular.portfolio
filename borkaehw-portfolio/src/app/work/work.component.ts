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
    let lucid = new Work();
    let umtri = new Work();
    let clinc = new Work();
    lucid.setOrgLogoPath('assets/img/lucid-logo.jpg');
    umtri.setOrgLogoPath('assets/img/umtri-logo.png');
    clinc.setOrgLogoPath('assets/img/clinc-logo.png');
    lucid.setOrgName('Lucid Software, Inc.');
    umtri.setOrgName('University of Michigan Transportation Research Institute');
    clinc.setOrgName('Clinc, Inc.');
    lucid.setOrgLocation('South Jordan', 'UT', 'USA');
    umtri.setOrgLocation('Ann Arbor', 'MI', 'USA');
    clinc.setOrgLocation('Ann Arbor', 'MI', 'USA');
    lucid.setWorkPeriod('June 2018');
    umtri.setWorkPeriod('September 2017', 'April 2018');
    clinc.setWorkPeriod('May 2017', 'August 2017');
    lucid.setDescription(jobDescription['lucid']);
    umtri.setDescription(jobDescription['umtri']);
    clinc.setDescription(jobDescription['clinc']);
    lucid.setLinks('https://www.golucid.co', 'lucid.co');
    umtri.setLinks('http://www.umtri.umich.edu', 'UMTRI.umich.edu');
    umtri.setLinks('https://www.cmisst.org', 'CMISST.org');
    clinc.setLinks('https://clinc.com', 'Clinc.com');
    this.works.set('lucid', lucid);
    this.works.set('umtri', umtri);
    this.works.set('clinc', clinc);
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
  'lucid': 'Developing Bazel, a Google’s open source build tool written in Java. Maintaining rules_scala, a rule for Bazel to perform a series of actions for Scala development. Targeting continuously reducing the build cost and improving build efficiency of the entire organization.',
  'umtri': 'I am working in CMISST research group as a full stack engineer. There are a variety of traffic data in Michigan area in CMISST database. My goal is to extract the useful information and present it to drivers. I am developing a Michigan crash data visualization tool in D3.js. With such query tool, drivers can easily get the crash information on certain conditions, such as, at which area has the most crashes during the year, or what is the age distribution of drivers in each crash. In addition, those data is also the basis of autonomous car development. The entire project is built on front-end JavaScript and a CodeIgniter PHP web server.',
  'clinc': 'I worked as a software engineer intern. Clinc is a startup in Ann Arbor, MI. their main focus is on personal financial assistant called Finie, which is a combination of \"Financial\" and \"Genie\". The reason why Finie is special is that people can use colloquial sentences to interact with Finie, even though there are some grammar mistakes or vague expressions in your sentences, Finie can understand it just like you are talking to a human being.<br>During the intern, I joined a project team called Finie for the Family. There are three major accomplishments for myself. The first one is building a monthly  budget tracking feature. Budgeting feature allows user to set a spending limit based either on certain categories or in general, it prevents users to overspend with next purchase. Besides creating a spending limit, users can modify their current amount or remove it. Finie can also give you spending advice based on the budget you have. The other similar is built on top of Finie, while we focused more on family assistant. Besides budgeting as a basic function, every family member could edit common shopping lists, or send notifications to family member. The last project is small but also exciting, I designed a web-app based chatbot to display the conversation between user and Finie.<br>Through out my intern, I used mostly Python as back-end language and Javascript as front-end language. Besides the feature designs as I mentioned above, I also had experience collecting crowd data by using Amazon Mechanical Turk, feeding data to machine learning model. For the back-end part, I used Django, an open source web framework written in Python, to interact with database.'
}
