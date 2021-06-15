import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin.model';
import { Flight } from '../model/Flight.model';
import { ScheduleFlight } from '../model/ScheduleFlight.model';
import { Ticket } from '../model/Ticket.model';
import { User } from '../model/User.model';
import { UserBooking } from '../model/UserBooking.model';

//const API_URL ="http://localhost:3000/";
const API_URL ="http://localhost:8989/admin/bookflightapp/";
//const API_URL ="http://localhost:8989/bookflightapp/";
const SFLIGHT_API_URL ="http://localhost:8989/scheduleflight/bookflightapp/";
const ADMIN_API_URL ="http://localhost:8989/admin/bookflightapp/";
const FLIGHT_API_URL ="http://localhost:8989/flight/bookflightapp/";
const TICKET_API_URL ="http://localhost:8989/ticket/bookflightapp/";
const USER_API_URL ="http://localhost:8989/user/bookflightapp/";
const USERB_API_URL ="http://localhost:8989/userbooking/bookflightapp/";
//http://localhost:8989/userbooking/bookflightapp/userBooking
@Injectable({
  providedIn: 'root'
})
export class FlightAppHttpService {

  constructor(private http : HttpClient) { }

  // getAdminDetails():Observable<Admin[]>{
  //   console.log("http");
  //   console.log(this.http.get<Admin[]>(API_URL + "adminLogin"));
  //   return this.http.get<Admin[]>(API_URL + "adminLogin");
  // }
  getAdminDetails(){
      // console.log("http");
      // console.log(this.http.get<Admin[]>(API_URL + "adminLogin"));
      return this.http.get(ADMIN_API_URL + "adminLogin");
    }

  addFlightDetails(flight : Flight):Observable<Flight>{
    return this.http.post<Flight>(FLIGHT_API_URL + "flights",flight);
  }

  getFlightDetails():Observable<Flight[]>{
    return this.http.get<Flight[]>(FLIGHT_API_URL + "flights");
  }
  getFlight(id : number):Observable<Flight>{
    console.log("inside http service getflight");
    return this.http.get<Flight>(FLIGHT_API_URL + "flights/" +id);
  }
  updateFlight(id : number , flight: Flight):Observable<Flight[]>{
    console.log("inside http service updateflight");
    return this.http.put<Flight[]>(FLIGHT_API_URL + "flights/" + id, flight);
  }
  deleteFlight(id : number){
    console.log(id);
    return this.http.delete<Flight>(FLIGHT_API_URL + "flights/" +id);

  }

  addScheduleFlightDetails(flight : ScheduleFlight):Observable<ScheduleFlight>{
    return this.http.post<ScheduleFlight>(SFLIGHT_API_URL + "scheduledflights",flight);
  }

  getScheduleFlightDetails():Observable<ScheduleFlight[]>{
    return this.http.get<ScheduleFlight[]>(SFLIGHT_API_URL + "scheduledflights");
  }
  getScheduleFlight(id : number):Observable<ScheduleFlight>{
    console.log("inside http service getflight");
    return this.http.get<ScheduleFlight>(SFLIGHT_API_URL + "scheduledflights/" +id);
  }
  updateScheduleFlight(id : number , flight: ScheduleFlight):Observable<ScheduleFlight[]>{
    console.log("inside http service updateflight");
    return this.http.put<ScheduleFlight[]>(SFLIGHT_API_URL + "scheduledflights/" + id, flight);
  }
  deleteScheduleFlight(id : number){
    console.log(id);
    return this.http.delete<ScheduleFlight>(SFLIGHT_API_URL + "scheduledflights/" +id);

  }

  addUserDetails(user : User):Observable<User>{
    return this.http.post<User>(USER_API_URL + "users", user);
  }

  getUserDetails():Observable<User[]>{
    return this.http.get<User[]>(USER_API_URL + "users");
  }
  addTickets(ticket : Ticket):Observable<Ticket>{
    console.log("ticket details in HTTP: " +ticket);
    return this.http.post<Ticket>(TICKET_API_URL + "tickets", ticket);
  }
  getTicketDetails():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(TICKET_API_URL + "tickets");
  }
  addBookingHistory(bookedTickets : UserBooking):Observable<UserBooking>{
    return this.http.post<UserBooking>(USERB_API_URL + "userBooking", bookedTickets);
  }
  getBookingHistory():Observable<UserBooking[]>{
    console.log("))))))))))+  "+JSON.stringify(this.http.get<UserBooking[]>(USERB_API_URL + "userBooking")));
    return this.http.get<UserBooking[]>(USERB_API_URL + "userBooking");
  }
  getBookingHistoryById(id : number):Observable<UserBooking>{
    return this.http.get<UserBooking>(USERB_API_URL + "userBooking/" +id);
  }
}
