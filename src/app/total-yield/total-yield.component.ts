import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {Response} from '@angular/http';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {Highcharts} from "angular-highcharts";
import { runInThisContext } from 'vm';

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
  arrayForGraph = [];
  aux: number=0;
  options =     {chart: {
    type: 'line',
    height: 295
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
series: this.arrayForGraph
}

  constructor(db: AngularFireDatabase) {
    this.toOranges = db.list("Information/Zones").valueChanges()
    this.items = db.list("Information/Total").valueChanges()
  }
  
  ngOnInit() {
    this.getYieldInfo();
    this.getOrangeInfo();
  }


  getYieldInfo(){
    this.items.subscribe((_items)=>{
      this.totalYield = 0;
      _items.forEach(item => {
        this.totalYield = this.totalYield + item;
        //this.totalOrchidArea = this.totalYield / 3;
        this.yieldPerH = this.totalYield / 18;
        
      })
      this.estimatedAvgField = this.totalYield / 18;
    })
    }

    public getOrangeInfo() {
      this.toOranges.subscribe((_items)=>{
        _items.forEach(item => {
          this.aux = 0;
          item.forEach((i, index, array) => {
            this.aux = this.aux + i;
          });
          this.arrayForGraph.push(this.aux)
          return this.arrayForGraph;
        })
        
      })
    }

    testGraph = new Chart(this.options);

    graph = new Chart({
      chart: {
        type: 'line',
        height: 295
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
        //layout: 'vertical',
        //align: 'right',
        //verticalAlign: 'middle',
        //itemMarginTop: 45
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
          data: [35, 25, 37, 30, 25, 35],
          //data: this.arrayForGraph,
          color: '#20C687'
          
        },

        {
          name: 'Min. Expected Avg. Yield',
          data: [37, 37, 37, 37, 37, 37],
          //dashStyle: 'dash',
          color: '#7A7A7A'
        },
        {
          name: 'Estimated Avg. Yield',
          data: [19, 19, 19, 19, 19, 19, 19],
          color: '#F0B33F'
        }
      ]
    });

  }
