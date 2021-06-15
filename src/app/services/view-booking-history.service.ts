import { Injectable } from '@angular/core';
import { UserBooking } from 'src/app/model/UserBooking.model';


@Injectable({
  providedIn: 'root'
})
export class ViewBookingHistoryService {

  public viewBookHistoryDetails : Array<UserBooking>;
  constructor() {
    this.viewBookHistoryDetails = [];
   }

   storeToHistory(bookingHistory : UserBooking){
    this.viewBookHistoryDetails.push(bookingHistory);
  }
}
