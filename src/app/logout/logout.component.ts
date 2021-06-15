import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../services/authenticate-service.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authendicateService : AuthenticateServiceService, private router : Router) { 
    this.authendicateService.adminLoggedOut();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
