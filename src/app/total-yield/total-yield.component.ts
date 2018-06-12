import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-total-yield',
  templateUrl: './total-yield.component.html',
  styleUrls: ['./total-yield.component.scss']
})
export class TotalYieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    series: [
      {
        name: 'YIELD',
        data: [5, 10, 15, 20, 25, 30, 35]
      }
    ]
  });
 
  // add point to chart serie
  add() {
    this.graph.addPoint(Math.floor(Math.random() * 10));
  }

}
