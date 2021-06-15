package com.cts.flightbooking.userservice.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.userservice.model.User;
import com.cts.flightbooking.userservice.repository.UserRepositoryInterface;
import com.cts.flightbooking.userservice.exception.UserNotFoundException;


@Component
public class UserServiceImpl implements UserServiceInterface{

	@Autowired
	private UserRepositoryInterface userService;

	@Override
	public List<User> getAllUserDetails() {
		// TODO Auto-generated method stub
		return this.userService.findAll();
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		Optional<User> userDetails = this.userService.findById(id);
		return userDetails.map(user -> user).orElseThrow(()-> new UserNotFoundException("User Not Found!!"));
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return this.userService.save(user);
	}
	
	
}

