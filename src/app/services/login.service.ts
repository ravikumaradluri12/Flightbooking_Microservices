import { Injectable } from '@angular/core';
import { mainModule } from 'process';
import { User } from 'src/app/model/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userDetails : Array<User>;
  
  constructor() {
    this.userDetails = [
      new User("rajesh", "abc@mail.com", 123456, "abcde","abcde"),
      new User("sankar",  "edg@mail.com", 73653637, "fghij","fghij")
    ];
    
   }
}
