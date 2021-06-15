package com.cts.flightbooking.userbookingservice.service;


import java.util.List;

import org.springframework.stereotype.Component;

import com.cts.flightbooking.userbookingservice.model.UserBooking;

@Component
public interface UserBookingServiceInterface {

	List<UserBooking> getAllUserBookingtDetails();
	
	UserBooking getUserBookingById(Integer id);
	
	UserBooking addUserBooking(UserBooking userBooking);
}

