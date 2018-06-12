import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TotalYieldComponent } from './total-yield/total-yield.component';
import { OrangeComponent } from './orange/orange.component';
import { OrangeTypeComponent } from './orange-type/orange-type.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TotalYieldComponent,
    OrangeComponent,
    OrangeTypeComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AngularFireModule.initializeApp(environment.firebase, 'faas-dtis'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
