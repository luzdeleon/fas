import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {ServerService} from '../server.service';
import {Response} from '@angular/http';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total-yield',
  templateUrl: './total-yield.component.html',
  styleUrls: ['./total-yield.component.scss']
})
export class TotalYieldComponent implements OnInit {

  items: Observable<any[]>;
  totalYield: any = 0;
  totalOrchidArea: number = 0;
  
  constructor(db: AngularFireDatabase , private serverService: ServerService) {

    //const relative = db.object('Information/Total').valueChanges();

    this.items = db.list("Information/Total").valueChanges()
  }
  

  ngOnInit() {
    this.getYieldInfo();
  }

  getYieldInfo(){
    this.items.subscribe((_items)=>{
      _items.forEach(item => {
        this.totalYield = this.totalYield + item;
        this.totalOrchidArea = this.totalYield / 3;
      })
    })
    /*this.serverService.getInformation().subscribe((response: Response)=> {
      //this.totalYield = response["Total"].Big + response["Total"].Small;
    });*/
  }

  graph = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      className: 'highcharts-xAxis-custom',
      title: {
        text: 'ZONE',
        style: {
          color: '#262F34'
        }
      },
      max: 18,
      endOnTick: true
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemMarginTop: 40
  },
    yAxis: {
      className: 'highcharts-yAxis-custom',
      title: {
          text: 'YIELD',
          style: {
            color: '#262F34'
          }
      },
      gridLineColor: '#D6D6D6'
  },
  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 3,
      lineWidth: 2,
      marker: {
        enabled: false
      }
    }
},
    series: [
      {
        name: 'Estimated yield per hectare',
        data: [24, 31, 15, 20, 25, 30, 35],
        color: '#20C687'
        
      },

      {
        name: 'Min. Expected Avg. Yield',
        data: [25, 25, 25, 25, 25, 25, 25],
        //dashStyle: 'dash',
        color: '#7A7A7A'
      },
      {
        name: 'Estimated Avg. Yield',
        data: [28, 28, 28, 28, 28, 28, 28],
        color: '#F0B33F'
      }
    ]
  });

}
