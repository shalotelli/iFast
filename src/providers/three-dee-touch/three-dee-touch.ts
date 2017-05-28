import { Injectable } from '@angular/core';

import { 
  ThreeDeeTouch, 
  ThreeDeeTouchQuickAction
} from '@ionic-native/three-dee-touch';

import { PrayerTimesProvider } from '../prayer-times/prayer-times';
import { PrayerTimesResult } from '../prayer-times/prayer-times-result';

@Injectable()
export class ThreeDeeTouchProvider {
  private actions: Array<ThreeDeeTouchQuickAction>;

  constructor(
    private threeDeeTouch: ThreeDeeTouch,
    private prayerTimes: PrayerTimesProvider) {}

  register() {
    this.prayerTimes.getTimesObservable()
      .subscribe((times: PrayerTimesResult) => {
        this.setPrayerTimes(times);
      });
  }

  private setPrayerTimes(times: PrayerTimesResult) {
    this.actions = [
      {
        title: 'Fajr',
        subtitle: times.fajr,
        iconType: 'Time'
      },

      {
        title: 'Dhuhr',
        subtitle: times.dhuhr,
        iconType: 'Time'
      },

      {
        title: 'Maghrib',
        subtitle: times.maghrib,
        iconType: 'Time'
      }
    ];
    
    this.threeDeeTouch.configureQuickActions(this.actions);
  }

}
