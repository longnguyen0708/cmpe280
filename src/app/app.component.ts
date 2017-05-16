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

          // }else if (auth.facebook){
          //   this.isLoggedIn = true;
          //   this.user_displayName = auth.facebook.displayName;
          //   this.user_email = auth.facebook.email;
          //   this.uid = auth.uid;
          //   localStorage.setItem('uid', auth.uid);
          //   console.log("Logged in");
          //   console.log(auth);
          //   this.router.navigate(['']);
          // }else if (auth.google){
          //   this.isLoggedIn = true;
          //   this.user_displayName = auth.google.displayName;
          //   this.user_email = auth.google.email;
          //   this.uid = auth.uid;
          //   localStorage.setItem('uid', auth.uid);
          //   console.log("Logged in");
          //   console.log(auth);
          //   this.router.navigate(['']);
          // }
  //  })

  //   this.isLoggedIn = true;
  // //  this.router.navigate(['']);
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
    this.user = this.authService.afAuth.authState;
    this.user.subscribe(auth => {
      console.log('user', auth)
      if (auth == null) {
            console.log("Logged out");
            this.isLoggedIn = false;
            this.user_displayName = '';
            this.user_email = '';
            //this.user_displayName_fb = '';
            //this.user_email_fb = '';
            this.router.navigate(['login']);
          }else {
            this.isLoggedIn = true;
             this.user_displayName = auth.displayName;
             this.user_email = auth.email;
             this.uid = auth.uid;
             localStorage.setItem('uid', auth.uid);
             this.locationService.getLocation();
             console.log("Logged in");
             this.router.navigate(['']);
          }
    })
  }
}
