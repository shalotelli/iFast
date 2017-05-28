import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import moment from 'moment';
import { PrayerTimesResult }  from '../prayer-times/prayer-times-result';
import { PrayerTimesProvider }  from '../prayer-times/prayer-times';

@Injectable()
export class CanEatProvider {

  constructor(private prayerTimes: PrayerTimesProvider) {}

  check(): Observable<boolean> {
    return Observable
      .interval(1000)
      .startWith(0)
      .map(() => !this.isFastTime())
      .share();
  }

  hoursLeft(): number {
    let times: PrayerTimesResult = this.prayerTimes.getTimes(),
            fajr: moment.Moment = this.convertTimeToMoment(times.fajr),
            maghrib: moment.Moment = this.convertTimeToMoment(times.maghrib);

    if (this.isFastTime()) {
      return maghrib.diff(moment(), 'hours');
    }

    return 0;
  }

  private isFastTime(): boolean {
    let times: PrayerTimesResult = this.prayerTimes.getTimes(),
              fajr: moment.Moment = this.convertTimeToMoment(times.fajr),
              maghrib: moment.Moment = this.convertTimeToMoment(times.maghrib);

    return <boolean>moment().isBetween(fajr, maghrib);
  }

  private convertTimeToMoment(time: string): moment.Moment {
    return moment(time, [ 'h:mm A' ]);
  }

}
