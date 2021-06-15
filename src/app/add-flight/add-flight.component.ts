import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/Flight.model';
import { FlightServiceService } from '../services/flight-service.service';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addFlightForm = new FormGroup({
    flightName: new FormControl(''),
    flightNumber: new FormControl('')

  });
 // addFlightForm : FormGroup;
  submitted = false;
  isAdded : boolean;
  constructor(public flightService : FlightServiceService, private router: Router, private builder : FormBuilder) {
    this.isAdded = false;
   }

  ngOnInit(): void {
    this.addFlightForm = this.builder.group({
      flightName : ["",[Validators.required, Validators.pattern("^[A-Za-z]{5,15}$")]],
      flightNumber : ["",[Validators.required, Validators.pattern("^[A-Za-z]{2,10}[0-9]{4}$")]],
    });
  }

  get addFlightFormControl() {
    return this.addFlightForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addFlightForm.valid) {

      let flight : Flight;
      flight = new Flight(this.addFlightForm.value.flightName, this.addFlightForm.value.flightNumber);
      this.flightService.addFlight(flight).subscribe();
      this.isAdded = true;
    }
  }

  // addFlights(){
  //     let flight : Flight;
  //     flight = new Flight(this.flightName.value, this.flightNumber.value, this.totalSeats.value, 
  //                         this.source.value, this.destination.value, new Date(this.departureTime.value),
  //                          new Date(this.arrivalTime.value), parseInt(this.ticketRate.value));
  //     this.flightService.addFlight(flight).subscribe();
  //     this.isAdded = true;
  //   }

    reloadForm(){
      this.isAdded = false;
      this.router.navigate(['/adminMenu']); 
    }
}
