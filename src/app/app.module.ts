import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { TotalYieldComponent } from './total-yield/total-yield.component';
import { OrangeComponent } from './orange/orange.component';
import { OrangeTypeComponent } from './orange-type/orange-type.component';


@NgModule({
  declarations: [
    AppComponent,
    TotalYieldComponent,
    OrangeComponent,
    OrangeTypeComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
