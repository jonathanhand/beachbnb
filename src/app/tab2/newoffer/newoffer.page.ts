import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceService } from 'src/app/tab1/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'],
})
export class NewofferPage implements OnInit {
  form: FormGroup;
  constructor(private placeService: PlaceService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      availableFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      availableTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  onCreateOffer() {
    console.log(this.form.value);
    this.placeService.addPlace(
      this.form.value.title,
      this.form.value.description,
      this.form.value.price,
      new Date(this.form.value.availableFrom),
      new Date(this.form.value.availableTo)
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab1']);
  }
}
