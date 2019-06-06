import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/tab1/place.model';

@Component({
  selector: 'app-offeritem',
  templateUrl: './offeritem.component.html',
  styleUrls: ['./offeritem.component.scss'],
})
export class OfferitemComponent implements OnInit {
  @Input () offer: Place;
  constructor() { }

  ngOnInit() {}
}
