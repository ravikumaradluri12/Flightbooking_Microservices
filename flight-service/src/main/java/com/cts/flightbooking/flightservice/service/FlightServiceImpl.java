package com.cts.flightbooking.flightservice.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.flightservice.exception.FlightNotFoundException;
import com.cts.flightbooking.flightservice.model.Flight;
import com.cts.flightbooking.flightservice.repository.FlightRepositoryInterface;


/**
 * @author Users
 *
 */
@Component
public class FlightServiceImpl implements FlightServiceInterface{
	
	
	/**
	 * FlightRepositoryInterface 
	 */
	private FlightRepositoryInterface flightRepository;
	
	
	@Autowired
	public void setFlightRepository(FlightRepositoryInterface flightRepository) {
		this.flightRepository = flightRepository;
	}

	//
	
	@Override
	public List<Flight> getAllFlightDetails() {
		return this.flightRepository.findAll();
	}

	@Override
	public Flight getFlightById(Integer id) {
		// TODO Auto-generated method stub
		Optional<Flight> flightDetails = this.flightRepository.findById(id);
		return flightDetails.map(flight -> flight).orElseThrow(()->new FlightNotFoundException("Flight not found!!"));
	}

	@Override
	public Flight addFlight(Flight flight) {
		// TODO Auto-generated method stub
		return this.flightRepository.save(flight);
	}

	@Override
	public Flight updateFlight(Integer id, Flight flight) {
		Optional<Flight> flightDetailsList = this.flightRepository.findById(id);
		if(flightDetailsList.isPresent()) {
			Flight flightData = flightDetailsList.get();
			flightData.setFlightName(flight.getFlightName());
			flightData.setFlightNumber(flight.getFlightNumber());
		}
		// TODO Auto-generated method stub
		return this.flightRepository.save(flight);
	}

	@Override
	public Flight deleteFlight(Integer id) {
		// TODO Auto-generated method stub
		Flight flight= this.getFlightById(id);
		this.flightRepository.deleteById(id);
		return flight;
	}

}

