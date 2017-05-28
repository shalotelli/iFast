import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

import { Surah } from './surah';

@Injectable()
export class QuranProvider {
  surahs: Array<Surah>;

  constructor(
    private http: Http,
    private storage: Storage) {}

  load() {
    this.storage.get('surahs')
      .then((surahs: Array<Surah>) => {
        if (surahs) {
          this.surahs = surahs;
        } else {
          this.fetch();
        }
      });
  }

  fetch() {
    this.http.get('http://api.alquran.cloud/quran/quran-simple')
      .map(response => response.json().data.surahs)
      .subscribe((surahs: Array<Surah>) => {
        this.surahs = surahs;
        this.storage.set('surahs', this.surahs);
      });
  }

  refresh() {
    this.storage.remove('surahs').then(() => {
      this.load();
    });
  }

}
