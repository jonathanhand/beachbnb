import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.booking;
  }
  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    this.bookingService.CancelBooking(bookingId);
    this.loadedBookings = this.bookingService.booking;
    slidingEl.close();
  }
}
