import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/model/Flight.model';
import { ScheduleFlight } from 'src/app/model/ScheduleFlight.model';
import { UserBooking } from 'src/app/model/UserBooking.model';
import { FlightAppHttpService } from './flight-app-http.service';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  
 // public flightDetails : Array<Flight>;
  
  constructor(private flightDetails : FlightAppHttpService) { 
    // this.flightDetails = [
    //   new Flight("IndiGo", "ABC123", 50, "Chennai", "Madurai", new Date('May 22, 2021 03:24:00'), new Date('May 23, 2021 06:24:00'), 4000),
    //   new Flight("AirIndia", "EFG123", 40, "Bangalore", "Mumbai", new Date('May 23, 2021 05:30:00'), new Date('May 24, 2021 15:45:00'), 5000)
    // ];
  }
  addFlight(flight : Flight):Observable<Flight>{
    return this.flightDetails.addFlightDetails(flight);
  }
  getFlightsList():Observable<Flight[]>{
    return this.flightDetails.getFlightDetails();
  }

  getAllBookingHistoryService():Observable<UserBooking[]>{
    console.log("@@@@@@"+JSON.stringify(this.flightDetails.getBookingHistory()));
    return this.flightDetails.getBookingHistory();
  }

  getFlightById(id : number):Observable<Flight>{
    console.log("inside flight service getbyid");
    return this.flightDetails.getFlight(id);
  }
  updateFlightDetail(id : number, flight : Flight):Observable<Flight[]>{
    console.log("id:" +id);
    console.log(flight);
    console.log("inside flight service");
    return this.flightDetails.updateFlight(id,flight);
  }
  removeFlight(id : number):Observable<Flight>{
    return this.flightDetails.deleteFlight(id);
  }

  addScheduleFlight(flight : ScheduleFlight):Observable<ScheduleFlight>{
    console.log("Scheduled Flight list: "+flight);
    return this.flightDetails.addScheduleFlightDetails(flight);
  }
  getScheduleFlightsList():Observable<ScheduleFlight[]>{
    return this.flightDetails.getScheduleFlightDetails();
  }
  getScheduleFlightById(id : number):Observable<ScheduleFlight>{
    console.log("inside flight service getbyid");
    return this.flightDetails.getScheduleFlight(id);
  }
  updateScheduleFlightDetail(id : number, flight : ScheduleFlight):Observable<ScheduleFlight[]>{
    console.log("id:" +id);
    console.log(flight);
    console.log("inside flight service");
    return this.flightDetails.updateScheduleFlight(id,flight);
  }
  removeScheduleFlight(id : number):Observable<ScheduleFlight>{
    return this.flightDetails.deleteScheduleFlight(id);
  }
}
