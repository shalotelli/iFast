import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Surah } from '../../providers/quran/surah';
import { Ayah } from '../../providers/quran/ayah';

import { CanEatProvider } from '../../providers/can-eat/can-eat';

@IonicPage()
@Component({
  selector: 'page-surah',
  templateUrl: 'surah.html',
})
export class SurahPage {
  surah: Surah;
  ayahs: Array<Ayah>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public canEat: CanEatProvider) {
    this.surah = <Surah>this.navParams.data;
    this.ayahs = <Array<Ayah>>this.surah.ayahs;
  }

}
