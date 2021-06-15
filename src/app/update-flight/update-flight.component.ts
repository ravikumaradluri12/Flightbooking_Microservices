import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { tempFlight } from 'src/app/model/tempFlight.model';
import { FlightServiceService } from '../services/flight-service.service';


@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  isUpdated : boolean=false;
  flight : any;
  flightSerialId : number=0;
  constructor(private route: ActivatedRoute,public flightService : FlightServiceService, private router: Router) { 
  flight:Flight;
  }

  ngOnInit(): void {
    this.flightSerialId = this.route.snapshot.params['id'];
    console.log("serial Id: " +this.flightSerialId);
    this.flightService.getFlightById(this.flightSerialId).subscribe(
      selectedFlight =>{
        this.flight = selectedFlight;
      }
    ); 
  }

  updateFlightList(updateFlight : any){
    let flight : ScheduleFlight;
    flight = new ScheduleFlight(updateFlight.flightName, updateFlight.flightNumber, updateFlight.totalSeats, updateFlight.source, updateFlight.destination, new Date(updateFlight.departureTime), new Date(updateFlight.arrivalTime), parseInt(updateFlight.ticketRate));
    console.log(flight);
    this.flightService.updateFlightDetail(this.flightSerialId,flight).subscribe();
    this.isUpdated = true;
  }
  routeToFlightDetails(){
    this.router.navigate(['/flightDetails']);
  }
}
