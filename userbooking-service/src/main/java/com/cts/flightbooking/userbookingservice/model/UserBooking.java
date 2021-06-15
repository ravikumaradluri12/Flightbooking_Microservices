package com.cts.flightbooking.userbookingservice.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserBooking {

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private Integer ticketNumber;
	
	@Column
	private String passengerName; 
	
	@Column
	private String flightName; 
	
	@Column
	private String flightNumber; 
	
	@Column
	private String source; 
	
	@Column
	private String destination;
	
	@Column
	private Date departureDate;
	
	@Column
	private Date departureTime;
	
	@Column
	private Date arrivalTime;
	
	@Column
	private Integer  journeyHrs; 
	
	@Column
	private Integer noOfPassengers; 

	@Column
	private Integer ticketRate ;

	@Column
	private Date bookedDate;

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getTicketNumber() {
		return ticketNumber;
	}

	public void setTicketNumber(Integer ticketNumber) {
		this.ticketNumber = ticketNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Date getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(Date departureDate) {
		this.departureDate = departureDate;
	}

	public Date getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(Date departureTime) {
		this.departureTime = departureTime;
	}

	public Date getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	

	public Integer getJourneyHrs() {
		return journeyHrs;
	}

	public void setJourneyHrs(Integer journeyHrs) {
		this.journeyHrs = journeyHrs;
	}

	public Integer getNoOfPassengers() {
		return noOfPassengers;
	}

	public void setNoOfPassengers(Integer noOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}

	public Integer getTicketRate() {
		return ticketRate;
	}

	public void setTicketRate(Integer ticketRate) {
		this.ticketRate = ticketRate;
	}

	public Date getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(Date bookedDate) {
		this.bookedDate = bookedDate;
	}

	@Override
	public String toString() {
		return "UserBooking [id=" + id + ", ticketNumber=" + ticketNumber + ", passengerName=" + passengerName
				+ ", flightName=" + flightName + ", flightNumber=" + flightNumber + ", source=" + source
				+ ", destination=" + destination + ", departureDate=" + departureDate + ", departureTime="
				+ departureTime + ", arrivalTime=" + arrivalTime + ", journeyHrs=" + journeyHrs + ", noOfPassengers="
				+ noOfPassengers + ", ticketRate=" + ticketRate + ", bookedDate=" + bookedDate + "]";
	}
	
	
}


