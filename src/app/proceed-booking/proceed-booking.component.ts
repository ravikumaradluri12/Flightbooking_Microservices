import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket.model';
import { TicketDetailsService } from '../services/ticket-details.service';

@Component({
  selector: 'app-proceed-booking',
  templateUrl: './proceed-booking.component.html',
  styleUrls: ['./proceed-booking.component.css']
})
export class ProceedBookingComponent implements OnInit {

  constructor(public ticketDetailsService : TicketDetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  routeToTicketBooking() {
    let selectedFlight = this.ticketDetailsService.ticketDetails.slice();
    for(let bookedTicket of selectedFlight){
    let ticket : Ticket;
    ticket = new Ticket(bookedTicket.ticketNumber,bookedTicket.passengerName,bookedTicket.flightName,
      bookedTicket.flightNumber,bookedTicket.source,bookedTicket.destination,bookedTicket.departureDate,
      bookedTicket.departureTime,bookedTicket.arrivalTime,bookedTicket.journeyHrs,bookedTicket.durationMins,bookedTicket.noOfPassengers,
      bookedTicket.ticketRate);
    this.ticketDetailsService.addTicket(ticket).subscribe();
    this.router.navigate(['/showTicket']);
  }
}
}
