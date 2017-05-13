import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component'
import { ItemService } from './service/item.service'
import { DashboardComponent } from './dashboard/dashboard.component'

import { AppRoutingModule } from './app-routing.module'

import { NavComponent } from './nav/nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
export const firebaseConfig = {
    apiKey: "AIzaSyC_w8E3vWbLUGigBcrlFg4Xn5nXsxcLbQk",
    authDomain: "cmpe280-e3475.firebaseapp.com",
    databaseURL: "https://cmpe280-e3475.firebaseio.com",
    projectId: "cmpe280-e3475",
    storageBucket: "cmpe280-e3475.appspot.com",
    messagingSenderId: "500269806045"
  };

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent, ItemDetailComponent, ItemsComponent, DashboardComponent, NavComponent, LoginPageComponent, HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
