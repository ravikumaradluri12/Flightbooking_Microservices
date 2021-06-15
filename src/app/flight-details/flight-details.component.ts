import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { FlightServiceService } from '../services/flight-service.service';



FlightServiceService
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flightList : Array<ScheduleFlight>;
  isEmpty : boolean;
  constructor(public flightService : FlightServiceService, private route : Router) { 
    this.flightList =[];
    this.isEmpty=false;
  }

  ngOnInit(): void {
    this.flightService.getScheduleFlightsList().subscribe(
      getFlightList =>{
        console.log(getFlightList);
        this.flightList = getFlightList;
        if(this.flightList.length ==0){
          this.isEmpty=true;
        }
      }
    );
  }
   routeToAddFlight(){
   this.route.navigate(['/addFlight'])
   }

   clickToRemove(id : number){
     this.flightService.removeScheduleFlight(id).subscribe(
       ()=> {
          this.ngOnInit();
       });   
   }
}
