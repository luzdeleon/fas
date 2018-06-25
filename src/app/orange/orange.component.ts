import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import { MomentModule } from 'angular2-moment';
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

  harvestDate: string = "";
  weather: string = "";
  minTemp: number = 0;
  maxTemp: number = 0;
  today =  new Date();



  ngOnInit() {
    this.getWeatherInfo();
  }

  getWeatherInfo(){
    this.items.subscribe((_items)=>{
      _items.forEach((item, index, array) => {
        if(index == array.length -1) {
          this.weather = item[1];
          this.harvestDate = item[0];
        }
      })
    })
  }

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase){
    this.items = db.list("Information/Weather").valueChanges()
  }
}
