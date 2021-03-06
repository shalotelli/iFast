import { Component, ViewChild } from '@angular/core';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CanEatProvider } from '../providers/can-eat/can-eat';
import { LocationProvider } from '../providers/location/location';
import { ThreeDeeTouchProvider } from '../providers/three-dee-touch/three-dee-touch';
import { QuranProvider } from '../providers/quran/quran';

import { HomePage } from '../pages/home/home';
import { QuranPage } from '../pages/quran/quran';
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
    private location: LocationProvider,
    private threeDeeTouch: ThreeDeeTouchProvider,
    private quran: QuranProvider) {
    this.initializeApp();
    this.setMenuItems();

    this.threeDeeTouch.register();
    this.quran.load();
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.location.find();
    });
  }

  private setMenuItems() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Quran', component: QuranPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }
}
