package com.cts.flightbooking.userservice.dto;


import java.util.List;

import com.cts.flightbooking.userservice.model.User;

public class UserDto {

	private List<User> userList;

	public UserDto(List<User> userList) {
		super();
		this.userList = userList;
	}

	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	@Override
	public String toString() {
		return "UserDto [userList=" + userList + "]";
	}
	
	
}

