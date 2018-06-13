import { Component, OnInit, Response } from '@angular/core';
import {Chart} from "angular-highcharts";
import {ServerService} from '../server.service';

@Component({
  selector: 'app-orange-type',
  templateUrl: './orange-type.component.html',
  styleUrls: ['./orange-type.component.scss']
})
export class OrangeTypeComponent implements OnInit {

  public counter = 0;

  oranges: number;

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
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        className: "highlight-yield-estimated",
        colors: ["#979797", "#20C687"],
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
        name : "% of non-estimated avg. field",
        y: 60
      }, {
        name : "% of estimated avg. field",
        y: 40
      }]
    }
  ]
  });

  
  bigOrangePieChart = new Chart({
    chart : {
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        className: "highlight-yield-estimated",
        colors: ["#979797", "#20C687"],
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
        name : "% of non-estimated avg. field",
        y: 40
      }, {
        name : "% of estimated avg. field",
        y: 60
      }]
    }
  ]
  });
}
