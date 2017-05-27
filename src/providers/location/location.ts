import { Injectable } from '@angular/core';
import { 
  Loading, 
  LoadingController 
} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { PrayerTimesProvider } from '../prayer-times/prayer-times';

@Injectable()
export class LocationProvider {
  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private prayerTimes: PrayerTimesProvider) {
  }

  find() {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Finding your location...'
    });

    loading.present();

    this.geolocation.getCurrentPosition()
      .then(location => {
        this.prayerTimes.setCoordinates(
          location.coords.latitude, 
          location.coords.longitude
        );

        loading.dismiss();
      })
      .catch(err => {
        console.error(err);
      });
  }

}
