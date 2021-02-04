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

    let p_metflix = new Project();
    p_metflix.setProjectImgPath('assets/img/metflix.gif');
    p_metflix.setTitle("Video Streaming Platform Development");
    p_metflix.setHasLink(true);
    p_metflix.setLink("https://ec2-54-69-150-119.us-west-2.compute.amazonaws.com/metflix/login.php");
    p_metflix.setDescription("Provided streaming service by designing different web end-points including video and profile management. Provided cloud solution on AWS EC2 instance with server hosting through XAMPP. Developed a subscription system with PayPal API to distin- guish available contents to different users. Supported live search system using AJAX to dynamically load the result after query.");
    this.projects.set('p_metflix', p_metflix);

    let p_webBrowser = new Project();
    p_webBrowser.setProjectImgPath('assets/img/webBrowser.gif');
    p_webBrowser.setTitle("Web Browser Development");
    p_webBrowser.setHasLink(true);
    p_webBrowser.setLink("https://github.com/hsuyuching/webbrowserinternals");
    p_webBrowser.setDescription("Created GUI window by Tkinter and handled URL connection through BSD socket interface. Converted HTML tokens into DOM tree which supports attributes and malformed tags. Enable CSS styling by using inheritance and privilege level to determine the object style. Supported basic JavaScript with DukPy interpreter and allowed scripts to modify page elements.");
    this.projects.set('p_webBrowser', p_webBrowser);




    p6.setProjectImgPath('assets/img/project6-logo.png');
    p5.setProjectImgPath('assets/img/project5-logo.png');
    p4.setProjectImgPath('assets/img/project4-logo.png');
    p3.setProjectImgPath('assets/img/project3-logo.png');
    p2.setProjectImgPath('assets/img/project2-logo.png');
    p1.setProjectImgPath('assets/img/project1-logo.png');

    p1.setTitle('Real-time Data Visualization Platform');
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

    p1.setLink('https://www.youtube.com/embed//IKfHjiEIFts');
    p2.setLink('https://hsuyuching.github.io/IAENG_IJCS.pdf');
    // p3.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    p4.setLink('https://hsuyuching.github.io/missing-migrants/');
    p4.setHasLink(true);
    // p5.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');
    // p6.setLinks('https://hsuyuching.github.io/missing-migrants/', 'proj');

    p1.setHasLink(true);
    p2.setHasLink(true);


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
  hasLink = false;
  link: string;

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
  setHasLink(hasLink: boolean){
    this.hasLink = hasLink;
  }
  getHasLink(){
    return this.hasLink;
  }
  setLink(link: string){
    this.link = link;
  }
  getLink(){
    return this.link;
  }
}
