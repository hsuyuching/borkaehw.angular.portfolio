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
    let p4 = new Project();
    let p3 = new Project();
    let p2 = new Project();
    let p1 = new Project();

    p4.setProjectImgPath('assets/img/project4-logo.png');
    p3.setProjectImgPath('assets/img/project3-logo.png');
    p2.setProjectImgPath('assets/img/project2-logo.png');
    p1.setProjectImgPath('assets/img/project1-logo.png');
    p1.setTitle('Image and Audio Processing with Paper Keyboard');
    p2.setTitle('Augmented Reality Implementation with Box Man');
    p3.setTitle('2D Indoor Positioning System in an Android Game App');
    p4.setTitle('Multi-class AdaBoost Algorithm Comparison');
    p4.setDescription('At first, We recorded human voice at only a single pitch, and we used DSP to simulate piano sound at every pitch. It sounds like a person is singing like a piano. In order to detect motions of playing the piano, we used a color filter to distinguish red, green, and blue on the image recorded by webcam. We chose a color which is obvious under the filter as our indicator for "press" action on the paper keyboard. Then we can demonstrate piano keyboard with classic music "I dreamed a dream".');
    p3.setDescription('We used Webcam to record real world and the marker. The marker is a reference point between virtual world and real world. Then we projected a box man into the Webcam recorded world by coordinate transformation. We can also control the box man to walk, skate, and teleport.');
    p2.setDescription('We put several bluetooth beacons on different locations in a space and used Android phone as signal receiver. Then we used RSSI, which stands for received signal strength indicator, as a measurement for calculating the distance between beacons and smartphone. With the distance data, we could detect the approximate location of users, and we used INS, inertial navigation system, as compensation for RSSI signal error, which is inevitable due to objects in the surrounding. Furthermore, we put RSSI and INS data into Kalman filter which improves location prediction up to 20%. Other DSP related technologies were used to erase sensor noise. Among all, my job was Android development and Bluetooth signal optimization.');
    p1.setDescription('AdaBoost is a method to improve the performance of classification problem. Normally, classification problem will only use one classifier to determine the label, error is often high with this primitive method. In this project, we use decision tree as weak classifier, and classify the data set first round. At the next round, we will put more weight on misclassified data samples, and do the second round. Since we put more emphasis on misclassified data samples, they have higher chance to be correctly classified. The same procedure goes on several times keeping updating the weight of misclassified data samples. At the end, error drop dramatically. The goal of this project is to compare the pros and cons of different versions of AdaBoost (use teacher teaching a class as example), which means the different ways of updating the weight of misclassified data samples. We compare in total of three versions.');
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
}