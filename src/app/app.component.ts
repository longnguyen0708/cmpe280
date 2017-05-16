import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LocationService } from './service/location.service'
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //userName = 'Mark';
  public isLoggedIn: Boolean;
  private user_displayName: String;
  //private user_displayName_fb: String;
  private user_email: String;
  //private user_email_fb: String;
  private uid: String;
  user: Observable<firebase.User>;
  constructor(public authService: AuthService, private router: Router, private locationService: LocationService) {
    this.user = this.authService.afAuth.authState;
    console.log('user', this.user)
    this.isLoggedIn = true;
    this.router.navigate(['']);
    // this.authService.afAuth.auth.subscribe(
    //   (auth) => {
    //     if (auth == null) {
    //       console.log("Logged out");
    //       this.isLoggedIn = false;
    //       this.user_displayName = '';
    //       this.user_email = '';
    //       //this.user_displayName_fb = '';
    //       //this.user_email_fb = '';
    //       this.router.navigate(['login']);
    //     }else if (auth.facebook){
    //       this.isLoggedIn = true;
    //       this.user_displayName = auth.facebook.displayName;
    //       this.user_email = auth.facebook.email;
    //       this.uid = auth.uid;
    //       localStorage.setItem('uid', auth.uid);
    //       console.log("Logged in");
    //       console.log(auth);
    //       this.router.navigate(['']);
    //     }else if (auth.google){
    //       this.isLoggedIn = true;
    //       this.user_displayName = auth.google.displayName;
    //       this.user_email = auth.google.email;
    //       this.uid = auth.uid;
    //       localStorage.setItem('uid', auth.uid);
    //       console.log("Logged in");
    //       console.log(auth);
    //       this.router.navigate(['']);
    //     }
    //   }
    // );
  }

  ngOnInit(): void {
    // var location = this.locationService.getLocation().subscribe((location) => {
    //   console.log('location', location)
    //
    // })
  }
}
