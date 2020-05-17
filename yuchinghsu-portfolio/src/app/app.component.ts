import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language = 'en';
  setLanguageHandler(language: string) {
    this.language = language;
  }
}
