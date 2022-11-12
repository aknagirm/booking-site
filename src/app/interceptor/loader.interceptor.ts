import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      tap(() => {
        this.loaderService.isLoading.next(false);
      })
    );
    /* return from(this.modalCtrl
    .create({
      component: LoaderComponent,
    })).pipe(tap(()=>{
      this.modalCtrl.dismiss()
      return next.handle(req)
    })) */
    /*  .then((modal) => {
      modal.present();
      return of(next.handle(req).pipe(tap(()=>{
        this.modalCtrl.dismiss()
      }))) */
    /*  modal.onDidDismiss().then((event) => {
        console.log(event.data, event.role);
      });
    });*/
  }
}
