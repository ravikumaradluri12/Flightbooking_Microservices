import { Component, OnInit } from '@angular/core';
import { AuthenticateServiceService } from '../services/authenticate-service.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticateService : AuthenticateServiceService) { }

  ngOnInit(): void {
  }

}
