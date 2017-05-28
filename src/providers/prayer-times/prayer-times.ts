import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import PrayerTimes from 'prayer-times';
import { PrayerTimesResult } from './prayer-times-result';

@Injectable()
export class PrayerTimesProvider {
  private prayerTimes: any;

  public method: string = 'Jafari';
  public coordinates: [ number, number ] = [ 28.7869517, -81.3644117 ];
  public timezone: number = -5;

  constructor(private storage: Storage) {
    this.prayerTimes = new PrayerTimes();

    this.getSavedValues();
  }

  setMethod(method: string): void {
    this.method = method;
    this.storage.set('method', this.method);

    this.prayerTimes.setMethod(this.method);
  }

  setCoordinates(lat: number, long: number): void {
    this.coordinates = [ lat, long ];
    this.storage.set('coordinates', this.coordinates);
  }

  setTimezone(timezone: number): void {
    this.timezone = timezone;
    this.storage.set('timezone', this.timezone);
  }

  getTimes(): PrayerTimesResult {
    return this.prayerTimes.getTimes(new Date(), this.coordinates, this.timezone);
  }

  getTimesObservable(): Observable<PrayerTimesResult> {
    return Observable
      .interval(10000)
      .startWith(0)
      .map(() => {
        return this.getTimes();
      })
      .share();
  }

  private getSavedValues() {
    this.storage.get('method').then((method: string) => {
      if (method) {
        this.method = method;
      }

      this.prayerTimes.setMethod(this.method);
    });

    this.storage.get('coordinates').then((coordinates: [ number, number ]) => {
      if (coordinates) {
        this.coordinates = coordinates;
      }
    });

    this.storage.get('timezone').then((timezone: number) => {
      if (timezone) {
        this.timezone = timezone;
      }
    });
  }

}
