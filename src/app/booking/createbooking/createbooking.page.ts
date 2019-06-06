import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/tab1/place.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { isDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.page.html',
  styleUrls: ['./createbooking.page.scss'],
})
export class CreatebookingPage implements OnInit {
  @Input() SelectPlace: Place;
  @Input() SelectedMode: 'select' | 'random';
  @ViewChild('f') form: NgForm;
  startDate: string;
  endDate: string;

  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
    const availableFrom = new Date(this.SelectPlace.availableFrom);
    const availableTo = new Date(this.SelectPlace.availableTo);
    if (this.SelectedMode === 'random') {
      this.startDate = new Date(
        availableFrom.getTime() +
        Math.random() *
        (availableTo.getTime() - availableFrom.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
        Math.random() *
        (availableTo.getTime() - new Date(this.startDate).getTime())
      ).toISOString();
    }
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookPlace() {
    this.modalCtrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value['first-name'],
          lastName: this.form.value['last-name'],
          guestNumber: this.form.value['guest-number'],
          startDate: this.form.value['date-from'],
          endDate: this.form.value['date-to']
        }
      },
      'confirm'
    );
  }
}
