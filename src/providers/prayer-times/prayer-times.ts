import { Injectable } from '@angular/core';
import PrayerTimes from 'prayer-times';
import { PrayerTimesResult } from './prayer-times-result';

@Injectable()
export class PrayerTimesProvider {
  private prayerTimes: any;
  private method: string = 'Jafari';
  private coordinates: [ number, number ] = [ 28.7869517, -81.3644117 ];
  private timezone: number = -5;

  constructor() {
    this.prayerTimes = new PrayerTimes();
    this.prayerTimes.setMethod(this.method);
  }

  setMethod(method: string): void {
    this.method = method;
    this.prayerTimes.setMethod(this.method);
  }

  setCoordinates(lat: number, long: number): void {
    this.coordinates = [ lat, long ];
  }

  setTimezone(timezone: number): void {
    this.timezone = timezone;
  }

  getTimes(): PrayerTimesResult {
    return this.prayerTimes.getTimes(new Date(), this.coordinates, this.timezone);
  }

}
