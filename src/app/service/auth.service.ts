import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Injectable()
export class AuthService {
  userid: string
  constructor(public af: AngularFire) { }
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }
  loginWithFacebook() {
    return this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }
  logout() {
    return this.af.auth.logout();
  }
  getuserid(){
  this.af.auth.subscribe(
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
