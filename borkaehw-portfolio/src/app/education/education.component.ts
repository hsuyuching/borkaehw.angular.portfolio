import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() name: string;
  @Input() language: string;

  educations = new Map<string, Education>();

  constructor() {
    let um = new Education();
    let nthu = new Education();
    um.setSchoolLogoPath('assets/img/um-logo.png');
    nthu.setSchoolLogoPath('assets/img/nthu-logo.png');
    um.setSchoolName('Univerisity of Michigan');
    nthu.setSchoolName('National Tsing Hua University');
    um.setDegree('Master of Science Engineering in Electrical and Computer Engineering');
    nthu.setDegree('Bachelor of Science Engineering in Electrical Engineering');
    um.setSchoolLocation('Ann Arbor', 'MI', 'USA');
    nthu.setSchoolLocation('Hsinchu', '', 'Taiwan');
    um.setSchoolPeriod('September 2016', 'April 2018');
    nthu.setSchoolPeriod('September 2011', 'June 2015');
    um.setGPA(3.86);
    nthu.setGPA(4.05);
    um.setCourses([
      'Operating Systems',
      'Database Management Systems',
      'Machine Learning',
      'Self-Driving Car',
      'Big Data Systems',
      'Matrix Methods',
      'Probability and Random Process'
    ]);
    nthu.setCourses([
      'Digital Signal Processing',
      'Operating Systems',
      'Data Structures',
      'Computer Architecture',
      'Signals and Systems'
    ]);
    this.educations.set('um', um);
    this.educations.set('nthu', nthu);
  }

  ngOnInit() {
  }

}

class Education {
  schoolLogoPath: string;
  schoolName: string;
  degree: string;
  schoolCity: string;
  schoolState: string;
  schoolCountry: string;
  startDate: string;
  endDate: string;
  GPA: number;
  courses: string[];

  setSchoolLogoPath(schoolLogoPath: string) {
    this.schoolLogoPath = schoolLogoPath;
  }
  getSchoolLogoPath() {
    return this.schoolLogoPath;
  }
  setSchoolName(schoolName: string) {
    this.schoolName = schoolName;
  }
  getSchoolName() {
    return this.schoolName;
  }
  setDegree(degree: string) {
    this.degree = degree;
  }
  getDegree() {
    return this.degree;
  }
  setSchoolLocation(schoolCity: string, schoolState: string, schoolCountry: string) {
    this.schoolCity = schoolCity;
    this.schoolState = schoolState;
    this.schoolCountry = schoolCountry;
  }
  getSchoolLocationString() {
    if (this.schoolState == '') {
      return `${ this.schoolCity }, ${ this.schoolCountry }`;
    } else {
      return `${ this.schoolCity }, ${ this.schoolState }, ${ this.schoolCountry }`;
    }
  }
  setSchoolPeriod(startDate: string, endDate: string = 'Present') {
    this.startDate = startDate;
    this.endDate = endDate;
  }
  getSchoolPeriod() {
    return `${ this.startDate } - ${ this.endDate }`;
  }
  setGPA(GPA: number) {
    this.GPA = GPA;
  }
  getGPA() {
    return this.GPA;
  }
  setCourses(courses: string[]) {
    this.courses = courses;
  }
  getCourses() {
    return this.courses;
  }
}
