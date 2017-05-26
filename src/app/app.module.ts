import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrayerTimesProvider } from '../providers/prayer-times/prayer-times';
import { CanEatProvider } from '../providers/can-eat/can-eat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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

    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    CanEatProvider
  ]
})
export class AppModule {}