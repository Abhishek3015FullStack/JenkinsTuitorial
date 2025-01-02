import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { New1Component } from './new1/new1.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { New5Component } from './new5/new5.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    New1Component,
    New3Component,
    New4Component,
    New5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
