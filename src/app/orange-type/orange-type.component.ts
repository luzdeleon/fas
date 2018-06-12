import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-orange-type',
  templateUrl: './orange-type.component.html',
  styleUrls: ['./orange-type.component.scss']
})
export class OrangeTypeComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit() {
  }

  pie = new Chart({
    /*chart : {
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
    }
  },
  series : [
    {
      name: '% of estimated avg. field',
      data: ['test', 80],
      size: '80%',
      innerSize: '60%'
      }
  ]*/
  });

}
