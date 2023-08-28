import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import { WeatherData } from '../../providers/weather-service/WeatherData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public weatherService: WeatherServiceProvider) {
  }

  weatherData: WeatherData = new WeatherData();

  ionViewDidLoad() {
    this.weatherService.weatherData().subscribe(
      weatherData => {
        this.weatherData = weatherData
        console.log(weatherData.timezone)
      },
      error =>  error); 
     }
  }

