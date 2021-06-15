import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { tempFlight } from 'src/app/model/tempFlight.model';
import { FlightServiceService } from '../services/flight-service.service';


@Component({
  selector: 'app-updatescheduleflight',
  templateUrl: './updatescheduleflight.component.html',
  styleUrls: ['./updatescheduleflight.component.css']
})
export class UpdatescheduleflightComponent implements OnInit {

  //user: User = new User();
  isUpdated : boolean=false;
  flight:any;
  
  flightSerialId : number=0;
  constructor(private route: ActivatedRoute,public flightService : FlightServiceService, private router: Router) { 
    flight: tempFlight;
  }

  ngOnInit(): void {
    this.flightSerialId = this.route.snapshot.params['id'];
    console.log("seriel Id: " +this.flightSerialId);
    this.flightService.getScheduleFlightById(this.flightSerialId).subscribe(
      selectedFlight =>{
        console.log(selectedFlight.departureTime);
        let tempDepTime = (selectedFlight.departureTime).toString().split("+")[0];
        let tempArrTime = (selectedFlight.arrivalTime).toString().split("+")[0];
        let tempFlightArray : tempFlight;
        tempFlightArray = new tempFlight(selectedFlight.flightName,selectedFlight.flightNumber,selectedFlight.totalSeat,
          selectedFlight.source,selectedFlight.destination,tempDepTime,tempArrTime,
          selectedFlight.ticketRate); 
        this.flight = tempFlightArray;
      }
    ); 
  }

  updateFlightList(updateFlight : any){
    let flight : ScheduleFlight;
    flight = new ScheduleFlight(updateFlight.flightName, updateFlight.flightNumber, updateFlight.totalSeats, updateFlight.source, updateFlight.destination, new Date(updateFlight.departureTime), new Date(updateFlight.arrivalTime), parseInt(updateFlight.ticketRate));
    console.log(flight);
    this.flightService.updateScheduleFlightDetail(this.flightSerialId,flight).subscribe();
    this.isUpdated = true;
  }
  routeToFlightDetails(){
    this.router.navigate(['/scheduledflightDetails']);
  }

}
