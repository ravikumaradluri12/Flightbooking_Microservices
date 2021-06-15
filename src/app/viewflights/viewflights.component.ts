import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { FlightServiceService } from '../services/flight-service.service';


@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  flightList : Array<Flight>;
  isEmpty : boolean;

  
  constructor(public flightService : FlightServiceService, private route : Router) { 
    this.flightList =[];
    this.isEmpty=false;
   
  }
  

  ngOnInit(): void {
    this.flightService.getFlightsList().subscribe(
      flightListArr =>{
        this.flightList = flightListArr;
        if(this.flightList.length ==0){
          this.isEmpty=true;
        }
      }
    );
  }
   routeToAddFlight(){
   this.route.navigate(['/addFlight']);
   }
   routeToUpdateFlight(){
    this.route.navigate(['/flightDetails/updateFlight/:id']);
  }
  

   clickToRemove(id : number){
     this.flightService.removeFlight(id).subscribe(
       ()=> {
          this.ngOnInit();
       });   
   }
   

}
