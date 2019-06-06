import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../place.model';
import { PlaceService } from '../place.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { CreatebookingPage } from 'src/app/booking/createbooking/createbooking.page';
import { BookingService } from 'src/app/booking/booking.service';

@Component({
  selector: 'app-placedetail',
  templateUrl: './placedetail.page.html',
  styleUrls: ['./placedetail.page.scss'],
})
export class PlacedetailPage implements OnInit {
  place: Place;
  id: string;
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService,
    private router: Router,
    private modalCtrl: ModalController,
    private ActionSheetCtrl: ActionSheetController,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
  }

  onBookPlace() {
    this.ActionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler : () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler : () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
  async openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    const modal = await this.modalCtrl.create({
      component: CreatebookingPage,
      componentProps: {SelectPlace: this.place, SelectedMode: mode}
    });
    await modal.present();
    modal.onDidDismiss().then((result: any) => {
      if (result.role === 'confirm') {
        const data = result.data.bookingData;
        this.bookingService.addBooking(
          this.place.id,
          this.place.title,
          this.place.image,
          data.firstName,
          data.lastName,
          data.guestNumber,
          data.startDate,
          data.endDate
        );
      }
    });
  }
}
