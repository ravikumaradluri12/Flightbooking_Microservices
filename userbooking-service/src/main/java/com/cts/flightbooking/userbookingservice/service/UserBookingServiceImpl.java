package com.cts.flightbooking.userbookingservice.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.userbookingservice.model.UserBooking;
import com.cts.flightbooking.userbookingservice.repository.UserBookingRepositoryInterface;

@Component
public class UserBookingServiceImpl implements UserBookingServiceInterface{

	@Autowired
	private UserBookingRepositoryInterface userService;
	
	@Override
	public List<UserBooking> getAllUserBookingtDetails() {
		// TODO Auto-generated method stub
		return this.userService.findAll();
	}

	@Override
	public UserBooking getUserBookingById(Integer id) {
		// TODO Auto-generated method stub
		return this.userService.findById(id).get();
	}

	@Override
	public UserBooking addUserBooking(UserBooking userBooking) {
		// TODO Auto-generated method stub
		return this.userService.save(userBooking);
	}


}

