package com.cts.flightbooking.adminservice.dto;


public class AdminDto {

	private String message;
	
	private Long loginTimeStamp;
	
	

	public AdminDto() {
		super();
		// TODO Auto-generated constructor stub
	}



	public AdminDto(String message, Long loginTimeStamp) {
		super();
		this.message = message;
		this.loginTimeStamp = loginTimeStamp;
	}



	public String getMessage() {
		return message;
	}



	public void setMessage(String message) {
		this.message = message;
	}



	public Long getLoginTimeStamp() {
		return loginTimeStamp;
	}



	public void setLoginTimeStamp(Long loginTimeStamp) {
		this.loginTimeStamp = loginTimeStamp;
	}
	
	
}
