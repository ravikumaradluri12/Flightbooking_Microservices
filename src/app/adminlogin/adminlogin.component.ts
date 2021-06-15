import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin.model';
import { AuthenticateServiceService } from 'src/app/services/authenticate-service.service';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  isValid : boolean;
  //adminDetails : Array<Admin>;
  adminDetails : any;
  constructor(private authService : AuthenticateServiceService, private router : Router) {
    this.isValid = true;
    //this.adminDetails =[];
    this.adminDetails=[];
   }

   ngOnInit(): void{
    console.log("hi++++++");
     this.authService.getadminAuthDetails().subscribe(
      
       adminList =>{
         this.adminDetails = adminList;
         console.log("last++++++"+JSON.stringify(adminList));
       }
     );
   }
 adminAuthenticate(adminLogin : any){
   console.log("hi")
  let adminAuthList = this.adminDetails.slice();
   for(let adminAuthDetail of adminAuthList){
    console.log("for block");
    if(adminLogin.adminId == adminAuthDetail.adminid && adminLogin.adminPassword==adminAuthDetail.password){
      console.log("if block");
      this.isValid = true;
      sessionStorage.setItem('admin', adminLogin.adminId);
      console.log("hello");
      this.router.navigate(['/adminMenu']);
    }
    else{
      this.isValid = false;
    }
 }
 }
}