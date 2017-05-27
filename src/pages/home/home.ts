import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CanEatProvider }  from '../../providers/can-eat/can-eat';
import { PrayerTimesProvider }  from '../../providers/prayer-times/prayer-times';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public canEat: CanEatProvider,
    public prayerTimes: PrayerTimesProvider) {}

}
