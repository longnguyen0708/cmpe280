import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(public authService: AuthService, private router:Router) { }
  ngOnInit() {
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle()//.then((data) => {
    //   console.log('loginWithGoogle', data)
    //   this.router.navigate(['']);
    // })

  }

  loginWithFacebook() {
    this.authService.loginWithFacebook()
    // this.authService.loginWithFacebook().then((data) => {
    //   this.router.navigate(['']);
    // })
  }
}
