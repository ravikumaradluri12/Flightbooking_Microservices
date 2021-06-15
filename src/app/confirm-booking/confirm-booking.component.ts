import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFlight } from 'src/app/model/BookFlight.model';
import { Ticket } from 'src/app/model/Ticket.model';
import { SearchFlightService } from '../services/search-flight.service';
import { TicketDetailsService } from '../services/ticket-details.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  confirmBookingForm = new FormGroup({
    noOfPassengers: new FormControl('')

  });

  flightSerialId : string="";
  confirmTicket : Array<BookFlight>;
  submitted = false;
  //confirmBookingForm : FormGroup;
  constructor(private route: ActivatedRoute, public searchAvailableFlights : SearchFlightService, public ticketDetailsService : TicketDetailsService, private router : Router, private builder : FormBuilder) { 
  this.confirmTicket =[];
  }

  ngOnInit(): void {
    this.confirmBookingForm = this.builder.group({
      noOfPassengers : ["", Validators.required]
    });
    this.flightSerialId = this.route.snapshot.params['id'];
    let selectFlight = this.searchAvailableFlights.searchFlightDetails.slice();
    let ticketArray : BookFlight;
    for(let ticketBook of selectFlight){
      console.log("ttttiv"+JSON.stringify(ticketBook));
      console.log("tisckt"+this.flightSerialId);
      if(ticketBook.flightNumber == this.flightSerialId){
        console.log("tisckt"+ticketBook);
        ticketArray = new BookFlight(ticketBook.flightName,ticketBook.flightNumber,
          ticketBook.totalSeat,ticketBook.source,ticketBook.destination,ticketBook.departureTime,
          ticketBook.arrivalTime,ticketBook.durationHrs,ticketBook.durationMins,
          ticketBook.ticketRate);
          this.confirmTicket.push(ticketArray);
          console.log("flight details to show on confirm page: " +ticketArray);
      }    
    }  
  }
  get confirmBookingFormControl() {
    return this.confirmBookingForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.confirmBookingForm.valid) {
      let selectFlight = this.confirmTicket;
    let tickets : Ticket;
    let totalTraveller : number;
    let cUser = this.searchAvailableFlights.currentUser.slice();
    totalTraveller = parseInt(this.confirmBookingForm.value.noOfPassengers);
    console.log("Not insideee frrr");
    for(let showBookingFLight of selectFlight){
      console.log("insideee frrr");
      for(let crntUser of cUser){
        console.log("insideee INSIDE frrr");
      let totalTicketRate = totalTraveller * showBookingFLight.ticketRate;
      var ticketNum = Math.floor(Math.random()*90000) + 10000;
    tickets = new Ticket(ticketNum,crntUser.userName,showBookingFLight.flightName, 
      showBookingFLight.flightNumber,showBookingFLight.source,showBookingFLight.destination,
      showBookingFLight.departureTime,showBookingFLight.departureTime,showBookingFLight.arrivalTime,
      showBookingFLight.durationHrs,showBookingFLight.durationMins,totalTraveller,totalTicketRate);
    console.log("&&&&&&"+JSON.stringify(tickets));
      this.ticketDetailsService.showTicket(tickets);
    this.searchAvailableFlights.searchFlightDetails.splice(0,this.searchAvailableFlights.searchFlightDetails.length);
    let flightsrchdetails = this.searchAvailableFlights.searchFlightDetails.slice();
    for(let flightvalues of flightsrchdetails){
      console.log(flightvalues);
    }
    console.log("searchflightdetails in confirm booking : " +this.searchAvailableFlights.searchFlightDetails.slice());
    }
  }
    this.router.navigate(['/proceedBooking']);
    }
  }
  // routeToShowTicket(bookingTicket : any){
  //   let selectFlight = this.confirmTicket;
  //   let tickets : Ticket;
  //   let totalTraveller : number;
  //   let cUser = this.searchAvailableFlights.currentUser.slice();
  //   totalTraveller = parseInt(bookingTicket.noOfPassengers);
  //   for(let showBookingFLight of selectFlight){
  //     for(let crntUser of cUser){
  //     let totalTicketRate = totalTraveller * showBookingFLight.ticketRate;
  //     var ticketNum = Math.floor(Math.random()*90000) + 10000;
  //   tickets = new Ticket(ticketNum,crntUser.userName,showBookingFLight.flightName, 
  //     showBookingFLight.flightNumber,showBookingFLight.source,showBookingFLight.destination,
  //     showBookingFLight.departureTime,showBookingFLight.departureTime,showBookingFLight.arrivalTime,
  //     showBookingFLight.durationHrs,totalTraveller,totalTicketRate);
  //   this.ticketDetailsService.showTicket(tickets);
  //   this.searchAvailableFlights.searchFlightDetails.splice(0,this.searchAvailableFlights.searchFlightDetails.length);
  //   let flightsrchdetails = this.searchAvailableFlights.searchFlightDetails.slice();
  //   for(let flightvalues of flightsrchdetails){
  //     console.log(flightvalues);
  //   }
  //   console.log("searchflightdetails in confirm booking : " +this.searchAvailableFlights.searchFlightDetails.slice());
  //   }
  // }
  //   this.router.navigate(['/proceedBooking']);
  // }
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
