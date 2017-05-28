import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurahPage } from './surah';

@NgModule({
  declarations: [
    SurahPage,
  ],
  imports: [
    IonicPageModule.forChild(SurahPage),
  ],
  exports: [
    SurahPage
  ]
})
export class SurahPageModule {}
