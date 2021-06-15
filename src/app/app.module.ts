import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
//import { RegistrationpageComponent } from './registrationpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LogoutComponent } from './logout/logout.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
//import { ConfirmBookingComponent } from '/confirm-booking/confirm-booking.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ViewBookingHistoryComponent } from './view-booking-history/view-booking-history.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ViewallbookinghistoryComponent } from './viewallbookinghistory/viewallbookinghistory.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
//import { SideHeaderComponent } from './side-header/side-header.component';
import { ProceedBookingComponent } from './proceed-booking/proceed-booking.component';
import { ScheduleflightComponent } from './scheduleflight/scheduleflight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { DatePipe } from './date.pipe';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { FlightServiceService } from './services/flight-service.service';
import { AuthenticateServiceService } from './services/authenticate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
   // RegistrationpageComponent,
   
    AdminloginComponent,
    FlightDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AddFlightComponent,
    ViewBookingHistoryComponent,
    TicketBookingComponent,
    ShowTicketComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent,
    UserLogoutComponent,
    SearchFlightComponent,
    ConfirmBookingComponent,
    AdminMenuComponent,
    ViewallbookinghistoryComponent,
    UpdateFlightComponent,
    //SideHeaderComponent,
    ProceedBookingComponent,
    ScheduleflightComponent,
    UpdatescheduleflightComponent,
    ViewflightsComponent,
    UserregistrationComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RxReactiveFormsModule,
    // RxReactiveDynamicFormsModule 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
