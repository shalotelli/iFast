import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuranPage } from './quran';

@NgModule({
  declarations: [
    QuranPage,
  ],
  imports: [
    IonicPageModule.forChild(QuranPage),
  ],
  exports: [
    QuranPage
  ]
})
export class QuranPageModule {}
