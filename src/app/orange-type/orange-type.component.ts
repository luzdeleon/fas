import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orange-type',
  templateUrl: './orange-type.component.html',
  styleUrls: ['./orange-type.component.scss']
})
export class OrangeTypeComponent implements OnInit {

  weatherObservable: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    let weathers = this.af.list('/weather');
    
  }

  ngOnInit() {
    this.weatherObservable = this.getCourses('/weather');
  }

  getCourses(listPath): Observable<any[]> {
    return this.af.list(listPath).valueChanges();
  }
}
