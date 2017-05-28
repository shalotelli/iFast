import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';

import { SettingsPageModule } from '../pages/settings/settings.module';
import { QuranPageModule } from '../pages/quran/quran.module';
import { SurahPageModule } from '../pages/surah/surah.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    HomePage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,

    SettingsPageModule,
    QuranPageModule,
    SurahPageModule
  ],

  bootstrap: [ IonicApp ],

  entryComponents: [
    MyApp,
    HomePage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ThreeDeeTouch,
    
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    
    PrayerTimesProvider,
    CanEatProvider,
    LocationProvider,
    ThreeDeeTouchProvider,
    QuranProvider
  ]
})
export class AppModule {}
