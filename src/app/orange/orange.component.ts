import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

import {ServerService} from '../server.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})

export class OrangeComponent implements OnInit {

  temporaryWeather: Array<any> = [];

  randomWeather: Array<any> = [];

  randomIndex: number = 0;

  buildIndexString: string = "Date";

  date: string = "";
  weather: string = "";
  minTemp: number = 0;
  maxTemp: number = 0;
  


  ngOnInit() {
    this.getWeatherInfo();

    this.randomIndex = Math.random() * this.temporaryWeather.length;
    this.buildIndexString = this.buildIndexString + (this.randomIndex + 1);

    this.getMinTemp(this.randomIndex);
    this.getMaxTemp(this.randomIndex)

    this.getDate(this.randomIndex);

    this.getWeather(this.randomIndex);
    
  }

  getWeatherInfo(){
    this.serverService.getInformation().subscribe((response: Response)=> {
      //this.temporaryWeather = response["Weather"];
      console.log(this.temporaryWeather)
    });
  }

  getMinTemp(index){
    console.log(this.temporaryWeather[index])
    //this.minTemp = this.temporaryWeather[this.randomIndex][2]
  }

  getMaxTemp(index){
    //this.maxTemp = this.temporaryWeather[index][3]
  }

  getDate(index){
    //this.date = this.temporaryWeather[index][0]
  }

  getWeather(index){
   // this.date = this.temporaryWeather[index][1]
  }

  items: Observable<any[]>;
  constructor(private serverService: ServerService){


  }

}
