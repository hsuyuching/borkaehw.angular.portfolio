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
    let uu = new Education();
    let yzu_ms = new Education();
    let yzu_bs = new Education();
    uu.setSchoolLogoPath('assets/img/uofu_logo.png');
    yzu_ms.setSchoolLogoPath('assets/img/yzu_logo.png');
    yzu_bs.setSchoolLogoPath('assets/img/yzu_logo.png');
    uu.setSchoolName('Univerisity of Utah');
    yzu_ms.setSchoolName('Yuan Ze University');
    yzu_bs.setSchoolName('Yuan Ze University');
    uu.setDegree('Master of Science in Computer Science');
    yzu_ms.setDegree('Master of Science in Electrical Engineering');
    yzu_bs.setDegree('Bachelor of Science in Electrical Engineering');
    uu.setSchoolLocation('Salt Lake City', 'UT', 'USA');
    yzu_ms.setSchoolLocation('Taoyuan', '', 'Taiwan');
    yzu_bs.setSchoolLocation('Taoyuan', '', 'Taiwan');
    uu.setSchoolPeriod('August 2019', 'Expected in May 2021');
    yzu_ms.setSchoolPeriod('August 2018', 'June 2019');
    yzu_bs.setSchoolPeriod('August 2014', 'June 2018');
    uu.setGPA(3.74);
    yzu_ms.setGPA(4.0);
    yzu_bs.setGPA(3.77);
    uu.setGPAScale('out of 4.0');
    yzu_ms.setGPAScale('out of 4.0');
    yzu_bs.setGPAScale('out of 4.0');
    uu.setCourses([
      'Advanced Algorithms','Computer Architecture',
      'Data Mining','Computer Vision','Information Retrieval','Natural Language Processing',
      'Visualization for Data Science',
      'Web Browser Internals', 'Deep Learning'
    ]);
    yzu_ms.setCourses([
      // 'Mobile Big Data Analysis and Machine Learning',
      // 'Neural Network',
      // 'Deep Learning and its Vision Applications'
    ]);
    yzu_bs.setCourses([
      // 'Digital Signal Processing',
      // 'Operating Systems',
      // 'Data Structures',
      // 'Computer Architecture',
      // 'Digital Signal Processing'
    ]);
    this.educations.set('uu', uu);
    this.educations.set('yzu_ms', yzu_ms);
    this.educations.set('yzu_bs', yzu_bs);
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
  GPAScala: string;
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
  setGPAScale(GPAScala: string) {
    this.GPAScala = GPAScala;
  }
  getGPAScale() {
    return this.GPAScala;
  }
  setCourses(courses: string[]) {
    this.courses = courses;
  }
  getCourses() {
    return this.courses;
  }
}
