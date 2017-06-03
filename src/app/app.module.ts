import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Calc1Component } from './calc1/calc1.component';
import { Calc1Service } from './calc1/calc1.service';

@NgModule({
  declarations: [
    AppComponent,
    Calc1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule
  ],
  providers: [Calc1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
