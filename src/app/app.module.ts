import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { ItemDetailComponent } from './component/item-detail.component';
import { ItemsComponent } from './component/items.component'
import { ItemService } from './service/item.service'
import { DashboardComponent } from './component/dashboard.component'

import { AppRoutingModule } from './app-routing.module'

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyC_w8E3vWbLUGigBcrlFg4Xn5nXsxcLbQk",
    authDomain: "cmpe280-e3475.firebaseapp.com",
    databaseURL: "https://cmpe280-e3475.firebaseio.com",
    projectId: "cmpe280-e3475",
    storageBucket: "cmpe280-e3475.appspot.com",
    messagingSenderId: "500269806045"
  };

@NgModule({
  declarations: [
    AppComponent, ItemDetailComponent, ItemsComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
