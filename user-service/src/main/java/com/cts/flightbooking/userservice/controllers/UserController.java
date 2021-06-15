package com.cts.flightbooking.userservice.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.userservice.model.User;
import com.cts.flightbooking.userservice.service.UserServiceInterface;
import com.cts.flightbooking.userservice.dto.UserDto;
import com.cts.flightbooking.userservice.exception.UserErrorResponse;
import com.cts.flightbooking.userservice.exception.UserNotFoundException;


@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class UserController {

	@Autowired
	private UserServiceInterface userService;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllserDetails(){
		List<User> users = this.userService.getAllUserDetails();
		UserDto userDto = new UserDto();
		userDto.setUserList(users);
		ResponseEntity<List<User>> responseEntity = new ResponseEntity<List<User>>(users, HttpStatus.OK);
		System.out.println("+++++"+users);
		System.out.println("+++++====="+userDto);
		return responseEntity;
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<UserDto> getUserById(@PathVariable Integer id){
		User users= this.userService.getUserById(id);
		List<User> userList = new ArrayList<>();
		userList.add(users);
		UserDto userDto = new UserDto();
		userDto.setUserList(userList);
		ResponseEntity<UserDto> responseEntity = new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@PostMapping("/users")
	public ResponseEntity<UserDto> addUser(@RequestBody User user){
		User userDetails = this.userService.addUser(user);
		List<User> userList = new ArrayList<>();
		userList.add(userDetails);
		UserDto userDto = new UserDto();
		userDto.setUserList(userList);
		ResponseEntity<UserDto> responseEntity = new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<UserErrorResponse> userNotFoundExceptionHandler(UserNotFoundException ex){
		
		UserErrorResponse error = new UserErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value(), System.currentTimeMillis());
		ResponseEntity<UserErrorResponse> response = new ResponseEntity<UserErrorResponse>(error, HttpStatus.NOT_FOUND);						
		return response;
	}
}
