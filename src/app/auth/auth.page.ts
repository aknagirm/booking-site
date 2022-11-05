import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

type Mode = 'login' | 'signup';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authMode: Mode = 'login';

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const emailValue = authForm.value.emailValue;
    const passwordValue = authForm.value.passwordValue;
    if (this.authMode === 'login') {
      ////
    } else {
      /////
    }
    this.authService.login();
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Loading...',
        spinner: 'lines-sharp-small',
      })
      .then((loader) => {
        loader.present();
        setTimeout(() => {
          this.router.navigateByUrl('/places/discover');
          loader.dismiss();
        }, 1500);
      });
  }

  switchLoginMethod() {
    this.authMode = this.authMode === 'login' ? 'signup' : 'login';
  }
}
