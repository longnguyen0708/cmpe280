import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LocationService } from './service/location.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //userName = 'Mark';
  private isLoggedIn: Boolean;
  private user_displayName: String;
  //private user_displayName_fb: String;
  private user_email: String;
  //private user_email_fb: String;
  private uid: String;
  constructor(public authService: AuthService, private router: Router, private locationService: LocationService) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          //this.user_displayName_fb = '';
          //this.user_email_fb = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.uid = auth.uid;
          //this.user_displayName_fb = auth.facebook.displayName;
          //this.user_email_fb = auth.facebook.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }

  ngOnInit(): void {
    // var location = this.locationService.getLocation().subscribe((location) => {
    //   console.log('location', location)
    //
    // })
  }
}
