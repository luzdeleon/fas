import { Component } from '@angular/core';

import {ServerService} from './server.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    this.onGet();
  }
  
  constructor(private serverService: ServerService){}
  
  onGet(){
    this.serverService.getInformation()
      .subscribe((response: Response) => {const data = response.json();
      console.log(data);},
    (error) => console.log(error));
  }

  //constructor(){}
}
