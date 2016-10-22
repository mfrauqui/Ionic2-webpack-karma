import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component'; 
import { TabsPage } from '../pages/tabs/tabs';

//import { ProfilePage } from '../pages/profile/profile'
import {LoginPage} from '../pages/login/login';
import { QuotesPage } from '../pages/quotes/quotes'

import { AuthConfig, AuthHttp } from 'angular2-jwt'; 
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    MyApp, 
    LoginPage,
    QuotesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    LoginPage,
    QuotesPage,
    TabsPage
  ],
  providers: [

    
  ]
})
export class AppModule {}
