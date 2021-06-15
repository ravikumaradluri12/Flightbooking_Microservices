import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../services/authenticate-service.service';


@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private authenticateService : AuthenticateServiceService, private router : Router) { 
    this.authenticateService.userLoggedOut();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
