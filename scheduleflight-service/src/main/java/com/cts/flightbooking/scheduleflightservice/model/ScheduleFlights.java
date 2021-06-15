package com.cts.flightbooking.scheduleflightservice.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ScheduleFlights {
	String flightName;
	@Id 
	String flightNumber;
	String source;
	String totalSeat;
	String destination;
	Date departureTime;
	Date arrivalTime;
	String ticketRate;
	
	
	
	
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
	public String getTotalSeat() {
		return totalSeat;
	}
	public void setTotalSeats(String totalSeat) {
		this.totalSeat = totalSeat;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
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
	public String getTicketRate() {
		return ticketRate;
	}
	public void setTicketRate(String ticketRate) {
		this.ticketRate = ticketRate;
	}
	@Override
	public String toString() {
		return "ScheduleFlights [flightName=" + flightName + ", flightNumber=" + flightNumber + ", source=" + source
				+ ", totalSeat=" + totalSeat + ", destination=" + destination + ", departureTime=" + departureTime
				+ ", arrivalTime=" + arrivalTime + ", ticketRate=" + ticketRate + "]";
	}
	
	
	
}
