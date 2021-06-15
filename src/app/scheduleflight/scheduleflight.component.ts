import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-scheduleflight',
  templateUrl: './scheduleflight.component.html',
  styleUrls: ['./scheduleflight.component.css']
})
export class ScheduleflightComponent implements OnInit {
  
  scheduleFlightForm = new FormGroup({
    flightName: new FormControl(''),
    flightNumber: new FormControl(''),
    source: new FormControl(''),
    totalSeats: new FormControl(''),
    destination: new FormControl(''),
    departureTime: new FormControl(''),
    arrivalTime: new FormControl(''),
    ticketRate: new FormControl('')
  });
  
  //scheduleFlightForm : FormGroup;
  submitted = false;
  isAdded : boolean;
  departureDate : String="";
  flightNumberFieldValue : string="";
  flightList : Array<Flight>;
  constructor(public flightService : FlightServiceService, private router: Router, private builder : FormBuilder) {
    this.isAdded = false;
    this.flightList = [];
   }

  ngOnInit(): void {
    this.scheduleFlightForm = this.builder.group({
      
      flightName : ["",Validators.required],
      //flightNumber :["",Validators.required],
      flightNumber : ["",[Validators.required, Validators.pattern("^[A-Za-z]{2,10}[0-9]{4}$")]],
      totalSeats : ["",[Validators.required, Validators.pattern("^[0-9]{2}$")]],
      source : ["",Validators.required],
      destination : ["", Validators.required],
      departureTime : ["", Validators.required],
      arrivalTime : ["", Validators.required],
      ticketRate : ["", [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{3,4}$")]]
    });
    var currentDate = new Date();
     let minDateString = new Date(new Date(currentDate).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
     let minDateStr = minDateString.substring(0, minDateString.length-3);
     this.departureDate = minDateStr;
     this.flightService.getFlightsList().subscribe(
       sheduledFlight =>{
         this.flightList = sheduledFlight;
       }
     )
  }

  get scheduleFlightFormControl() {
    return this.scheduleFlightForm.controls;
  }
  getflightNumber(){
    let flightNameField = this.scheduleFlightForm.value.flightName;
    console.log(flightNameField);
    this.flightService.getFlightsList().subscribe(
      flightList =>{
        for(let flightDetails of flightList){
          if(flightDetails.flightName == flightNameField){
            this.flightNumberFieldValue = flightDetails.flightNumber;
            console.log(this.flightNumberFieldValue);
            this.scheduleFlightForm.controls['flightNumber'].setValue(this.flightNumberFieldValue);
            this.scheduleFlightForm.controls['flightNumber'].disable();
          }
        }
      }
    )
  }
  onSubmit() {
    this.submitted = true;
    if (this.scheduleFlightForm.valid) {

      let flight : ScheduleFlight;
      flight = new ScheduleFlight(this.scheduleFlightForm.value.flightName, this.flightNumberFieldValue, this.scheduleFlightForm.value.totalSeats, 
        this.scheduleFlightForm.value.source, this.scheduleFlightForm.value.destination, new Date(this.scheduleFlightForm.value.departureTime),
         new Date(this.scheduleFlightForm.value.arrivalTime), parseInt(this.scheduleFlightForm.value.ticketRate));
     
      console.log("ffffff"+JSON.stringify(flight))
                           this.flightService.addScheduleFlight(flight).subscribe();
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
