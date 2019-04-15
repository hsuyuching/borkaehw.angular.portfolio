import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
