import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  offerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.offerForm = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(180)]),
      ],
      price: [
        null,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      availableFrom: ['', Validators.compose([Validators.required])],
      availableTo: [null, Validators.compose([Validators.required])],
    });
  }
}
