import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() name: string;
  @Input() language: string;

  projects = new Map<string, Project>();

  constructor() {
    let p6 = new Project();
    let p5 = new Project();
    let p4 = new Project();
    let p3 = new Project();
    let p2 = new Project();
    let p1 = new Project();

    p6.setProjectImgPath('assets/img/project6-logo.png');
    p5.setProjectImgPath('assets/img/project5-logo.png');
    p4.setProjectImgPath('assets/img/project4-logo.png');
    p3.setProjectImgPath('assets/img/project3-logo.png');
    p2.setProjectImgPath('assets/img/project2-logo.png');
    p1.setProjectImgPath('assets/img/project1-logo.png');

    p1.setTitle('Image Quality Analysis Tool');
    p2.setTitle('Auto Recognition for Elevator Button with CNN');
    p3.setTitle('Paired Face Detection for Multi-Camera');
    p4.setTitle('Missing Migrants Data Visualization');
    p5.setTitle('Auto Recognition for Unmanned Store with Faster R-CNN');
    p6.setTitle('3D Computer Graphics for Combination Lock')

    p6.setDescription('Designed the combination lock by using 3D AutoCAD. At first, constructed the model of for each ring in the lock, and then designed the mechanism for bonding rings and the lock itself. Since the lock require both the inner and outer tenon-and-mortise structure, it has to be designed dedicatedly.');
    p5.setDescription('With only 6k samples, we have to distinguish items in 105 classes. Hence, to overcome the weakness of the small training dataset, we use multiple image preprocessing techniques to eliminate background noise as much as possible. Then, we designed an algorithm based on Faster R-CNN to identify the products.');
    p4.setDescription('Designed an interactive website to provide safer migration suggestion by visualizing routes. Firstly, to visualize a dataset, we first must do the data cleaning work to ensure the integrity of the data. Hence, we divided the dataset into two part, one is the map, another is for word cloud. To make the website more interesting, we create several interaction between different graph.');
    p3.setDescription('Besides the technique for human face detection, we added the upper body information to help identify the paired face in multi-camera. With analysis in feature comparison between different color spaces, and the calibration between different cameras, we can improve the accuracy in the detection of pairing face.');
    p2.setDescription('We designed the algorithm, which can localize (with 95.8% accuracy) and recognize (with 100% accuracy) the button with combining of PAC, KBC, TM, CNN and finally, SSIM. With the method, we can strengthen the robot indoor navigation ability.');
    p1.setDescription('Developed Logitech\'s internal analysis tool for image quality team to better control auto focus, auto white balance, auto exposure. Achieved real-time manipulation in video between hardware control and software visualization.');

    p1.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p2.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p3.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p4.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p5.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p6.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');


    this.projects.set('p6', p6);
    this.projects.set('p5', p5);
    this.projects.set('p4', p4);
    this.projects.set('p3', p3);
    this.projects.set('p2', p2);
    this.projects.set('p1', p1);
  }

  ngOnInit() {
  }

}

class Project {
  projectImgPath: string;
  title: string;
  description: string;
  links = [];

  setProjectImgPath(projectImgPath: string) {
    this.projectImgPath = projectImgPath;
  }
  getProjectImgPath() {
    return this.projectImgPath;
  }
  setTitle(title: string) {
    this.title = title;
  }
  getTitle() {
    return this.title;
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
