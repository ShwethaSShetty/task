import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public getDataFromApi(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/premgowda/sample_performance_data/master/data.json')
      .map(res => res.json());
  }

}


