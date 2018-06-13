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
    
    this.getData();
  }

  getWeatherInfo(){
    this.serverService.getInformation()
      .subscribe((response: Response) => {const data = response.json();

        this.temporaryWeather = data["Weather"];
      
      ;
    },
    (error) => console.log(error));
    
  }

  getData() {
    
  }

  items: Observable<any[]>;
  constructor(private serverService: ServerService){


  }

}
