import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/tab1/place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.page.html',
  styleUrls: ['./editoffer.page.scss'],
})
export class EditofferPage implements OnInit {
  place: Place;
  id: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private placeService: PlaceService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
    this.form = new FormGroup({
      title: new FormControl(this.place.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(this.place.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
    });
  }
  onEditOffer() {
    console.log(this.form);
    this.placeService.updateOffer(
      this.id,
      this.form.value.title,
      this.form.value.description
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab1']);
  }
}
