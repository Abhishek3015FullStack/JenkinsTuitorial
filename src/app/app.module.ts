import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { New1Component } from './new1/new1.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { New5Component } from './new5/new5.component';
import { New6Component } from './new6/new6.component';
import { New7Component } from './new7/new7.component';
import { New8Component } from './new8/new8.component';
import { New9Component } from './new9/new9.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    New1Component,
    New3Component,
    New4Component,
    New5Component,
    New6Component,
    New7Component,
    New8Component,
    New9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
