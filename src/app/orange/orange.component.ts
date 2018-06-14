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

    
  }

  getWeatherInfo(){
    /*this.serverService.getInformation().subscribe((response: Response)=> {
      //this.temporaryWeather = response["Weather"];
      console.log(this.temporaryWeather)
    });*/

    this.items.subscribe((_items)=>{
      _items.forEach(item => {
        //do something here
      })
    })
  }

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase , private serverService: ServerService){
    this.items = db.list("Information/Weather").valueChanges()
  }

}
