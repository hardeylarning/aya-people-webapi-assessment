import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
