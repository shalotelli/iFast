import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Surah } from '../../providers/quran/surah';

import { SurahPage } from '../surah/surah';
import { QuranProvider } from '../../providers/quran/quran';
import { CanEatProvider } from '../../providers/can-eat/can-eat';

@IonicPage()
@Component({
  selector: 'page-quran',
  templateUrl: 'quran.html',
})
export class QuranPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public quran: QuranProvider,
    public canEat: CanEatProvider) {}

  goToSurah(surah: Surah) {
    this.navCtrl.push(SurahPage, surah);
  }

}
