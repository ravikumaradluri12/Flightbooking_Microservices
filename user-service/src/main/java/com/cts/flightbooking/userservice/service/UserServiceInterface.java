package com.cts.flightbooking.userservice.service;



import java.util.List;

import com.cts.flightbooking.userservice.model.User;



public interface UserServiceInterface {

	List<User> getAllUserDetails();
	
	User getUserById(Integer id);
	
	User addUser(User user);
	
	
}
