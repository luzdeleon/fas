import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';

@Injectable()

export class ServerService {
    constructor(private http: Http) {}
    getInformation(){
        const headers = new Headers({"Content-Type": "application/json"});
        return this.http.get("https://faas-dtis.firebaseio.com/Information.json", {headers: headers})
    }
}