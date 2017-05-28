import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';

import { QuranPageModule } from '../pages/quran/quran.module';
import { SurahPageModule } from '../pages/surah/surah.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrayerTimesProvider } from '../providers/prayer-times/prayer-times';
import { CanEatProvider } from '../providers/can-eat/can-eat';
import { LocationProvider } from '../providers/location/location';
import { ThreeDeeTouchProvider } from '../providers/three-dee-touch/three-dee-touch';
import { QuranProvider } from '../providers/quran/quran';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuranPageModule,
    SurahPageModule
  ],

  bootstrap: [ IonicApp ],

  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    PrayerTimesProvider,
    Geolocation,

    ThreeDeeTouch,
    
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    CanEatProvider,
    LocationProvider
    ThreeDeeTouchProvider,
    QuranProvider
  ]
})
export class AppModule {}
