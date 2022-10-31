import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
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
}
