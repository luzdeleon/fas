import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TotalYieldComponent } from './total-yield/total-yield.component';
import { OrangeComponent } from './orange/orange.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TotalYieldComponent,
    OrangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
