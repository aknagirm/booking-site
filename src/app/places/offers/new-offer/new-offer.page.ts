import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  offerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private placesService: PlacesService,
    private router: Router
  ) {}

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

  createNewOffer() {
    const offerData = this.offerForm.value;
    this.placesService.createOffer(offerData).subscribe(() => {
      this.offerForm.reset();
      this.router.navigateByUrl('/places/offers');
    });
  }
}
