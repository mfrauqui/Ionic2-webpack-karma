import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ProfilePage } from '../profile/profile'
import {LoginPage} from '../login/login';
import { QuotesPage } from '../quotes/quotes'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = LoginPage;
  tab2Root: any = QuotesPage;

  constructor(public navCtrl: NavController) {
       
  }
 ionViewDidLoad() {
    console.log('Hello Tabs Page');
  }

}