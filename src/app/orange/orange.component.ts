import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {

  weatherObservable: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    let weathers = this.af.list('/weather');
  }

  ngOnInit() {
    this.weatherObservable = this.getWeather('/weather');
  }

  getWeather(listPath): Observable<any[]> {
    return this.af.list(listPath).valueChanges();
  }

}
