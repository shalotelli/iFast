import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PrayerTimes from 'prayer-times';
import { PrayerTimesResult } from './prayer-times-result';

@Injectable()
export class PrayerTimesProvider {
  private prayerTimes: any;

  public method: string = 'Jafari';
  public coordinates: [ number, number ] = [ 28.7869517, -81.3644117 ];
  public timezone: number = -5;

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

  getTimesObservable(): Observable<PrayerTimesResult> {
    return Observable
      .interval(10000)
      .startWith(0)
      .map(() => {
        return this.getTimes();
      })
      .share();
  }

}
