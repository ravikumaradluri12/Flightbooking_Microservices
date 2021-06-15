import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserBooking } from 'src/app/model/UserBooking.model';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-viewallbookinghistory',
  templateUrl: './viewallbookinghistory.component.html',
  //templateUrl: './userregistration.component.html',
  styleUrls: ['./viewallbookinghistory.component.css']
})
export class ViewallbookinghistoryComponent implements OnInit {

  getAllBookings : Array<UserBooking>;
  constructor(public flightService : FlightServiceService, private route : Router) { 
    this.getAllBookings = [];
  }

  ngOnInit(): void {
    this.flightService.getAllBookingHistoryService().subscribe(
      getAllBookingList =>{
        this.getAllBookings = getAllBookingList;
      }
    );
  }

}
