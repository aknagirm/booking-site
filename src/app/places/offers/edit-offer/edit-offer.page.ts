import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offerForm: FormGroup;
  selectedPlace: Place;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedPlace = this.placesService.getPlace(params.get('place-id'));
      this.createForm();
    });
  }

  createForm() {
    this.offerForm = this.fb.group({
      title: [
        this.selectedPlace.title,
        Validators.compose([Validators.required]),
      ],
      description: [
        this.selectedPlace.description,
        Validators.compose([Validators.required, Validators.maxLength(180)]),
      ],
    });
  }
}
