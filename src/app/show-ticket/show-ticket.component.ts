import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket.model';
import { UserBooking } from 'src/app/model/UserBooking.model';
import { SearchFlightService } from '../services/search-flight.service';
import { TicketDetailsService } from '../services/ticket-details.service';
import { ViewBookingHistoryService } from '../services/view-booking-history.service';


@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent {
  
  
  constructor(public ticketDetailsService : TicketDetailsService, public viewTicketHistory : ViewBookingHistoryService, private router : Router, public searchFlightService : SearchFlightService) { 
    
  }
 
  routeToSearch() {
    let ticketDetails = this.ticketDetailsService.ticketDetails.slice();
    for(let ticketBookingHistory of ticketDetails){
      let viewHistory : UserBooking;
      viewHistory = new UserBooking(ticketBookingHistory.ticketNumber,ticketBookingHistory.passengerName,ticketBookingHistory.flightName, ticketBookingHistory.flightNumber, ticketBookingHistory.source, ticketBookingHistory.destination,ticketBookingHistory.departureDate,ticketBookingHistory.departureTime,ticketBookingHistory.arrivalTime,ticketBookingHistory.journeyHrs,ticketBookingHistory.noOfPassengers,ticketBookingHistory.ticketRate,new Date());
      this.ticketDetailsService.addUserBooking(viewHistory).subscribe();
      console.log("searchflightdetails in show ticket : " +this.searchFlightService.searchFlightDetails);
     // this.viewTicketHistory.storeToHistory(viewHistory); 
    }
    
    this.ticketDetailsService.ticketDetails.splice(0,this.ticketDetailsService.ticketDetails.length);
    this.router.navigate(['/searchFlight']);
  }
}
