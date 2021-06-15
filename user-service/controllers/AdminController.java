package com.cts.flightbooking.adminservice.controllers;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.model.Admin;
import com.cts.flightbooking.service.AdminServiceInterface;


@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class AdminController {

	@Autowired
	private AdminServiceInterface adminService;
	
	@GetMapping("/adminLogin")
	public ResponseEntity<List<Admin>> getAdminDetails(){
		List<Admin> admin = this.adminService.getAdminDetails();
		ResponseEntity<List<Admin>> responseEntity = new ResponseEntity<List<Admin>>(admin, HttpStatus.OK);
		return responseEntity;
	}
	
//	@GetMapping("/adminLogin")
//	public ResponseEntity<LoginDto> adminLogin() {
//		LoginDto loginDto = new LoginDto("Logged In", System.currentTimeMillis());
//		ResponseEntity<LoginDto> responseEntity = new ResponseEntity<LoginDto>(loginDto,HttpStatus.OK);
//		return responseEntity;
//	}
}

