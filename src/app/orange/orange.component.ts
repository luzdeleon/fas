import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

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

    
  }

  getWeatherInfo(){
    this.items.subscribe((_items)=>{
      _items.forEach((item, index, array) => {
        if(index == array.length -1) {
          this.weather = item[1];
          this.date = item[0];
        }
      })
      
    })
  }

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase){
    this.items = db.list("Information/Weather").valueChanges()
  }

}
