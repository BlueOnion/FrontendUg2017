import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Calc1Component } from './calc1/calc1.component';
import { Calc1Service } from './calc1.service';
import { Calc2Component } from './calc2/calc2.component';

import { RouterModule, Routes} from '@angular/router';
import { Calc3Component } from './calc3/calc3.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'peyotep', pathMatch: 'full' },
  { path: 'peyotep', component: Calc1Component},
  { path: 'peyoten', component: Calc2Component},
  { path: 'beadcrochet', component: Calc3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Calc1Component,
    Calc2Component,
    Calc3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule,
	RouterModule.forRoot(routes),
  ],
  providers: [Calc1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
