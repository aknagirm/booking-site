import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.isLoading.subscribe(
      (loading) => (this.loading = loading)
    );
  }
}
