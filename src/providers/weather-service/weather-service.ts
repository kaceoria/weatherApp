import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";
import { WeatherData } from './WeatherData';

/*
  Generated class for WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {

  items: any = [];


  private baseURL = "https://api.open-meteo.com/";

  constructor(public http: HttpClient) {
    console.log('Hello WeatherServiceProvider');
    
  }

  weatherData(): Observable<WeatherData> {
    const options =
    { params: new HttpParams()
        .set('latitude', "38.6273")
        .set('longitude', "-90.1979")
        .set('daily', 'weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max')
        .set('timezone','America/Chicago')
        .set('temperature_unit',"fahrenheit")
        .set('windspeed_unit','mph')
        .set('precipitation_unit','inch')
        .set('forecast_days','1')

     };

    return this.http.get(this.baseURL + '/v1/forecast', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}