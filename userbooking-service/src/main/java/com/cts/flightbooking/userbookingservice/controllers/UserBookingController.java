package com.cts.flightbooking.userbookingservice.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.userbookingservice.model.UserBooking;
import com.cts.flightbooking.userbookingservice.service.UserBookingServiceInterface;
import com.cts.flightbooking.userbookingservice.dto.UserBookingDto;

@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class UserBookingController {

	@Autowired
	private UserBookingServiceInterface userService;
	
	@GetMapping("/userBooking")
	public ResponseEntity<List<UserBooking>> getAllUserBookingDetails(){
		List<UserBooking> userBooking = this.userService.getAllUserBookingtDetails();
//		UserBookingDto userBookingDto = new UserBookingDto();
//		userBookingDto.setUserBooking(userBooking);
		ResponseEntity<List<UserBooking>> responseEntity = new ResponseEntity<>(userBooking, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/userBooking/{id}")
	public ResponseEntity<UserBookingDto> getUserBookingById(@PathVariable Integer id){
		
		UserBooking userBooking=this.userService.getUserBookingById(id);
		List<UserBooking> userBookingList = new ArrayList<>();
		userBookingList.add(userBooking);
		UserBookingDto userBookingDto = new UserBookingDto();
		userBookingDto.setUserBooking(userBookingList);
		ResponseEntity<UserBookingDto> responseEntity = new ResponseEntity<UserBookingDto>(userBookingDto, HttpStatus.OK);
		return responseEntity;
	}
	@PostMapping("/userBooking")
	public ResponseEntity<UserBookingDto> addUserBooking(@RequestBody UserBooking userBooking){
		UserBooking userBookings = this.userService.addUserBooking(userBooking);
		List<UserBooking> userBookingList = new ArrayList<>();
		userBookingList.add(userBookings);
		UserBookingDto userBookingDto = new UserBookingDto();
		userBookingDto.setUserBooking(userBookingList);
		ResponseEntity<UserBookingDto> responseEntity = new ResponseEntity<UserBookingDto>(userBookingDto, HttpStatus.OK);
		return responseEntity;
	}
}


