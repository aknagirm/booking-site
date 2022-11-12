import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logOut();
  }
}
