import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  routeToAddFlight(){
    this.router.navigate(['/addFlight']);
  }
  routeToScheduleFlight(){
    this.router.navigate(['/scheduleflight']);
  }
  routeToViewSceduledFlight(){
    this.router.navigate(['/scheduledflightDetails']);
  }
  routeToViewFlight(){
    this.router.navigate(['/flightDetails']);
  }
  routeToViewAllBookingHistory(){
    this.router.navigate(['/viewAllBookings']);
  }
}
