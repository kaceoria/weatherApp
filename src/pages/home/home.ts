import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import { WeatherData } from '../../providers/weather-service/WeatherData';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public weatherService: WeatherServiceProvider, public platform: Platform, private geolocation: Geolocation) {
    // platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
       });

      // Geolocation.getCurrentPosition().then((data) => {
      //     console.log('My latitude : ', data.coords.latitude);
      //     console.log('My longitude: ', data.coords.longitude);
      // });


  // });
}


  // }

  // weatherData = 
  // {
  //   timezone:"",
  //   sunrise: ""
// }

weatherData = new WeatherData()

  ionViewDidLoad() {
    this.weatherService.weatherData().subscribe(
      weatherData => {
        this.weatherData = weatherData
        // this.weatherData.timezone = weatherData.timezone
        // this.weatherData.sunrise = weatherData.daily_units.sunrise
        console.log(weatherData.daily_units.sunrise)
      },
      error =>  error); 
     }
  }

