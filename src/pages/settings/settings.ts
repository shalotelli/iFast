import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CanEatProvider } from '../../providers/can-eat/can-eat';
import { PrayerTimesProvider } from '../../providers/prayer-times/prayer-times';
import { LocationProvider } from '../../providers/location/location';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  prayerTimeMethods: Array<{ value: string, label: any }>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public canEat: CanEatProvider,
    public prayerTimes: PrayerTimesProvider,
    private location: LocationProvider) {
    this.setPrayerTimeMethods();
  }

  private setPrayerTimeMethods() {
    this.prayerTimeMethods = [
      {
        value: 'MWL',
        label: 'Muslim World League'
      },

      {
        value: 'ISNA',
        label: 'Islamic Society of North America'
      },

      {
        value: 'Egypt',
        label: 'Egyptian General Authority of Survey'
      },

      {
        value: 'Makkah',
        label: 'Umm al-Qura University, Makkah'
      },

      {
        value: 'Karachi',
        label: 'University of Islamic Sciences, Karachi'
      },

      {
        value: 'Tehran',
        label: 'Institute of Geophysics, University of Tehran'
      },

      {
        value: 'Jafari',
        label: 'Shia Ithna Ashari (Ja`fari)'
      }
    ];
  }

  refreshLocation() {
    this.location.find();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
