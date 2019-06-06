import { Component, OnInit } from '@angular/core';
import { Place } from '../tab1/place.model';
import { PlaceService } from '../tab1/place.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  offers: Place[];
  constructor (private placeService: PlaceService) {}
  ngOnInit () {
    this.offers = this.placeService.places;
  }
  ionViewWillEnter() {
    this.offers = this.placeService.places;
  }
}
