import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      '../assets/imgs/nyc.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1'
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Pairs',
      '../assets/imgs/paris.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1'
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1'
    ),
  ];
  
  get places() {
    return [...this._places];
  }
  constructor(private http: HttpClient) { }
  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      '../assets/imgs/nyc.jpg',
      price,
      dateFrom,
      dateTo,
      'u1'
    );
    this.http.get(
      'https://beachbnb-93d74.firebaseio.com/place.json',
    )
    .subscribe((response) => {
    });

    this.http.post(
      'https://beachbnb-93d74.firebaseio.com/place.json',
      {
        ...newPlace,
        id:null
      }
    )
    .subscribe((response) => {
      console.log(response);
    });
    this._places.push(newPlace);
    console.log(this._places);
  }
  updateOffer(placeId: string, title: string, description: string) {
    const updatedPlaceIndex = this._places.findIndex(pl => pl.id === placeId);
    const updatedPlace = [...this._places];
    const oldPlace = updatedPlace[updatedPlaceIndex];
    updatedPlace[updatedPlaceIndex] = new Place(
      oldPlace.id,
      title,
      description,
      oldPlace.image,
      oldPlace.price,
      oldPlace.availableFrom,
      oldPlace.availableTo,
      oldPlace.userId
    );
    this._places.splice(updatedPlaceIndex, 1);
    this._places.push(updatedPlace[updatedPlaceIndex]);
  }
}
