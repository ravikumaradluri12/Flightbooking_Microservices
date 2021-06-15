package com.cts.flightbooking.flightservice.service;



import java.util.List;

import com.cts.flightbooking.flightservice.model.Flight;


/**
 * @author User
 *
 */
public interface FlightServiceInterface {

	
	
	/**
	 * Get all flight
	 * @return List<Flight>
	 */
	List<Flight> getAllFlightDetails();
	
	
	
	/**
	 * Get flight details by flight number
	 * @param flightNumber
	 * @return Flight
	 */
	Flight getFlightById(Integer id);

	
	/** 
	 * Add flight to database
	 * @param flight
	 * @return Flight
	 */
	Flight addFlight(Flight flight);
	
	//
	
	/**
	 * Update flight details
	 * @param flight
	 * @return Flight
	 */
	Flight updateFlight(Integer id, Flight flight);
	
	//
	
	/**
	 * Delete flight by Id
	 * @param flight
	 * @return Flight
	 */
	Flight deleteFlight(Integer id);
}

