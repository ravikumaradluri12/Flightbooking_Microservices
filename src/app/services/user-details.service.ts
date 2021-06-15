import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User.model';
import { FlightAppHttpService } from './flight-app-http.service';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  public userDetails: Array<User> = [];
  
  
  constructor(private userGetDetails : FlightAppHttpService) {
    // this.userDetails = [
    //   new User("rajesh", "abc@mail.com", 123456, "abcde"),
    //   new User("sankar",  "edg@mail.com", 73653637, "fghij")
    // ]; 
   }
   
   addUser(user : User):Observable<User>{
    console.log("inside service");
    return this.userGetDetails.addUserDetails(user);
   }
   getUserDetails():Observable<User[]>{
     return this.userGetDetails.getUserDetails();
   }
}
