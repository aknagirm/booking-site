import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(createBookingForm: NgForm) {
    this.modalCtrl.dismiss(
      { message: 'dummy message', formValue: createBookingForm.value },
      'confirm'
    );
  }
}
