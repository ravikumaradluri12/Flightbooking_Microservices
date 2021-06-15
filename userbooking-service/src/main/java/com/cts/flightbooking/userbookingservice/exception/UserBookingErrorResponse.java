package com.cts.flightbooking.userbookingservice.exception;


public class UserBookingErrorResponse {

private String message;
	
	private Integer errorCode;
	
	private Long timeStamp;

	public String getMessage() {
		return message;
	}

	
	public UserBookingErrorResponse() {
		
		// TODO Auto-generated constructor stub
	}


	public UserBookingErrorResponse(String message, Integer errorCode, Long timeStamp) {
		super();
		this.message = message;
		this.errorCode = errorCode;
		this.timeStamp = timeStamp;
	}


	public void setMessage(String message) {
		this.message = message;
	}

	public Integer getErrorCode() {
		return errorCode;
	}


	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}


	public Long getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Long timeStamp) {
		this.timeStamp = timeStamp;
	}
}

