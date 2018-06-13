import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {ServerService} from '../server.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-orange-type',
  templateUrl: './orange-type.component.html',
  styleUrls: ['./orange-type.component.scss']
})
export class OrangeTypeComponent implements OnInit {

  counter: number  = 0;

  oranges: number = 0;

  constructor(private serverService: ServerService) {
    
  }

  ngOnInit() {
    
  }


  getOrangeInfo(){
    this.serverService.getInformation()
      .subscribe((response: Response) => {const data = response.json();
        this.oranges = data.Total;
        console.log(this.oranges);
    },
    (error) => console.log(error));
  }

  smallOrangePieChart = new Chart({
    chart : {
      type: 'pie',
      height: 95 + "%"
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        className: "highlight-yield-estimated",
        colors: ["#20C687","#979797"],
        dataLabels: {
          enabled: false
        }
    }
  },
  series : [
    {
      name: '% Yield',
      innerSize: '60%',
      size: '100%',
      data: [{
        name : "% of estimated avg. field",
        y: 40
      }, {
        name : "% of non-estimated avg. field",
        y: 60
      }]
    }
  ]
  });

  
  bigOrangePieChart = new Chart({
    chart : {
      type: 'pie',
      height: 95 + "%"
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        className: "highlight-yield-estimated",
        colors: ["#20C687","#979797"],
        dataLabels: {
          enabled: false
        }
    }
  },
  series : [
    {
      name: '% Yield',
      innerSize: '60%',
      size: '100%',
      data: [{
        name : "% of estimated avg. field",
        y: 60
      }, {
        name : "% of non-estimated avg. field",
        y: 40
      }]
    }
  ]
  });
}
