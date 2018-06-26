import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {Response} from '@angular/http';
import { element } from 'protractor';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orange-type',
  templateUrl: './orange-type.component.html',
  styleUrls: ['./orange-type.component.scss']
})
export class OrangeTypeComponent implements OnInit {

  smallSizeTotal: number = 0;
  bigSizeTotal: number = 0;
  items: Observable<any[]>;
  totalY: Observable<any[]>;
  cost: number=0;
  aux: Array<any>;
  totalYield: number = 0;
  smallPercentage = 0;
  bigPercentage: number  = 0;


  constructor(db: AngularFireDatabase) {
    this.items = db.list("Information/Zones").valueChanges();
    this.totalY = db.list("Information/Total").valueChanges();
  }

  ngOnInit() {
    //this.getOrangeInfo(); 

    this.getPercentages();

    
  }


  getOrangeInfo() {
    this.items.subscribe((_items)=>{
      _items.forEach(item => {
        
       
        /*item.forEach((i, index, array)=>{
          if(index == 0){
            this.smallSizeTotal = this.smallSizeTotal + item[index];
            this.smallPercentage = this.smallSizeTotal * 100 ;
          } else {
            this.bigSizeTotal = this.bigSizeTotal + item[index];
            this.bigPercentage = this.bigSizeTotal *100;
          }
        });*/
        
        /*item.forEach(i => {
          console.log(i)
          if(this.aux[0] === "Big Size" || this.aux[0] == " Big Size"){
            this.aux[1] = +this.aux[1];
            this.bigSizeTotal = this.bigSizeTotal + this.aux[1];
            //console.console.log(this.bigSizeTotal)
            this.bigPercentage = this.bigSizeTotal *100;
          }else {
            this.aux[1] = +this.aux[1];
            this.smallSizeTotal = this.smallSizeTotal + this.aux[1];
            //console.log(this.smallSizeTotal)
            this.smallPercentage = this.smallSizeTotal * 100;
          }
          
        })*/
      })
    })
  }

  getPercentages(){
    this.totalY.subscribe((_items)=> {
      
      this.totalYield = 0;
      _items.forEach((item) => {
        this.totalYield = this.totalYield + item;
         
      })
      this.bigSizeTotal = _items[0];
      this.smallSizeTotal = _items[1];

      this.bigPercentage = (this.bigSizeTotal * 100) / this.totalYield;
      this.smallPercentage = (this.smallSizeTotal * 100) / this.totalYield;
      
    });
  }

  smallOrangePieChart = new Chart({
    chart : {
      type: 'pie',
      height: 160
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
        y: 33
      }, {
        name : "% of non-estimated avg. field",
        y: 61
      }]
    }
  ]
  });

  
  bigOrangePieChart = new Chart({
    chart : {
      type: 'pie',
      height: 160
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
        y: 61
      }, {
        name : "% of non-estimated avg. field",
        y: 39
      }]
    }
  ]
  });
}
