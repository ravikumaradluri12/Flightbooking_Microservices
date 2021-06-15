import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserBooking } from 'src/app/model/UserBooking.model';
import { SearchFlightService } from '../services/search-flight.service';

import { TicketDetailsService } from '../services/ticket-details.service';
import { ViewBookingHistoryService } from '../services/view-booking-history.service';


@Component({
  selector: 'app-view-booking-history',
  templateUrl: './view-booking-history.component.html',
  styleUrls: ['./view-booking-history.component.css']
})
export class ViewBookingHistoryComponent implements OnInit {

  bookingHistoryArray : Array<UserBooking>;
  constructor(public viewBookingHistory : TicketDetailsService, public router : Router, public curUser : SearchFlightService) { 
    this.bookingHistoryArray = [];
  }

  ngOnInit(): void {
    this.viewBookingHistory.getUserBooking().subscribe(
      getAllBookingList =>{
        let curUserArray = this.curUser.currentUser.slice();
        let bookingList = getAllBookingList.slice();
        for(var i=0;i<curUserArray.length;i++){
          for(var j=0;j<bookingList.length;j++){
            if(curUserArray[i].userName == bookingList[j].passengerName){
              let userBookingTempArray : UserBooking;
              userBookingTempArray = new UserBooking(bookingList[j].ticketNumber,bookingList[j].passengerName,
                bookingList[j].flightName,bookingList[j].flightNumber,bookingList[j].source,bookingList[j].destination,
                bookingList[j].departureDate,bookingList[j].departureTime,bookingList[j].arrivalTime,bookingList[j].journeyHrs,
                bookingList[j].noOfPassengers,bookingList[j].ticketRate,bookingList[j].bookedDate);
              this.bookingHistoryArray.push(userBookingTempArray);
            }
          }
        }
        
      }
    );  
  }
routeToSearch(){
  this.router.navigate(['/searchFlight']);
}
}
