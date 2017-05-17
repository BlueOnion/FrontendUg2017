import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Calc1Component } from './calc1/calc1.component';

@NgModule({
  declarations: [
    AppComponent,
    Calc1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, Calc1Component]
})
export class AppModule { }
