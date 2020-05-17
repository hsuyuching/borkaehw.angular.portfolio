import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BiographyComponent } from './biography/biography.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { HobbyComponent } from './hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    JumbotronComponent,
    BiographyComponent,
    ProfileComponent,
    NavbarComponent,
    EducationComponent,
    ProjectComponent,
    SkillComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
