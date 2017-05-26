import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { CanEatProvider } from '../providers/can-eat/can-eat';
import { PrayerTimesProvider } from '../providers/prayer-times/prayer-times';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public canEat: CanEatProvider,
    private geolocation: Geolocation,
    private prayerTimes: PrayerTimesProvider) {
    this.initializeApp();
    this.setMenuItems();
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setLocation();
    });
  }

  private setLocation() {
    this.geolocation.getCurrentPosition()
      .then(location => {
        this.prayerTimes.setCoordinates(
          location.coords.latitude, 
          location.coords.longitude
        );
      })
      .catch(err => {
        console.error(err);
      });
  }

  private setMenuItems() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: SettingsPage }
    ];
  }
}
