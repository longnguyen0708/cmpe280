import { Injectable } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  userid: string
  constructor(public afAuth: AngularFireAuth) { }
  loginWithGoogle() :firebase.Promise<any>{
    // return this.af.auth.login({
    //   provider: AuthProviders.Google,
    //   method: AuthMethods.Popup
    // });
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  // loginWithFacebook() {
  //   return this.af.auth.login({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.Popup
  //   });
  // }
  logout() {
    this.afAuth.auth.signOut();
  }
  getuserid(){
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
        } else {
          this.userid = auth.uid;
        }
      }
    );
    return this.userid;
  }
}
