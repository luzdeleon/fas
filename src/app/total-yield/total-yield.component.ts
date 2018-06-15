import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {Response} from '@angular/http';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total-yield',
  templateUrl: './total-yield.component.html',
  styleUrls: ['./total-yield.component.scss']
})
export class TotalYieldComponent implements OnInit {

  toOranges: Observable<any[]>;
  items: Observable<any[]>;
  totalYield: any = 0;
  totalOrchidArea: number = 0;

  yieldPerH: number=0;
  estimatedAvgField: number = 0;
  arrayTest= [];
  arraySmallTest = [];
  
  smallSizeTotal: number = 0;
  bigSizeTotal: number = 0;
  
  aux: Array<any>;
  
  constructor(db: AngularFireDatabase) {

    //const relative = db.object('Information/Total').valueChanges();
    this.toOranges = db.list("Information/Zones").valueChanges()
    this.items = db.list("Information/Total").valueChanges()
  }
  

  ngOnInit() {
    this.getYieldInfo();
    this.getOrangeInfo();
    
  }

  getYieldInfo(){
    this.items.subscribe((_items)=>{
      _items.forEach(item => {
        this.totalYield = this.totalYield + item;
        this.totalOrchidArea = this.totalYield / 3;
        this.yieldPerH = this.totalYield / 18;
        this.estimatedAvgField = this.totalYield / 18;
      })
    })
    }

    getOrangeInfo() {
      this.toOranges.subscribe((_items)=>{
        _items.forEach(item => {
          item.forEach(i => {
            this.aux = i.split(": ")
            this.arrayTest.push(this.aux[1])
            //this.bigSizeTotal = this.bigSizeTotal + this.aux[1] + this.smallSizeTotal;
            //this.arrayTest.push(this.bigSizeTotal)
            console.log(this.aux)
          })
        })
      })
    }

  graph = new Chart({
    chart: {
      type: 'line',
      height: 220
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      allowDecimals : false,
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
      itemMarginTop: 45
  },
    yAxis: {
      className: 'highcharts-yAxis-custom',
      title: {
          text: 'YIELD [T]',
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
        data: [60, 40, 29, 24, 30, 59,  55],
        //data: this.arrayTest,
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
        data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
        //data: [this.estimatedAvgField, this.estimatedAvgField, this.estimatedAvgField, this.estimatedAvgField, this.estimatedAvgField, this.estimatedAvgField, this.estimatedAvgField],
        color: '#F0B33F'
      }
    ]
  });

}
