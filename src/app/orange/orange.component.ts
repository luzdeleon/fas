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

  public temporaryWeather = [];

  private randomWeather: Array<any>;

  private randomIndex = this.temporaryWeather[Math.random()* this.temporaryWeather.length];


  ngOnInit() {
    this.getWeatherInfo();
  }


  getWeatherInfo(){
    this.serverService.getInformation()
      .subscribe((response: Response) => {const data = response.json();
      
      data["Weather 2"].forEach(element => {
        this.randomWeather = element.split(",");
        this.temporaryWeather.push(this.randomWeather);
       
      });
    },
    (error) => console.log(error));

    console.log(this.temporaryWeather);
    
  }



  items: Observable<any[]>;
  constructor(db: AngularFireDatabase, private serverService: ServerService){
    
    /*this.items = db.list('/Information/Weather').valueChanges();
    //test
    this.items.forEach(element => {
       console.log(element);
    });*/

  }

}
