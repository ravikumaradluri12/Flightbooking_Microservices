package com.cts.flightbooking.flightservice.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.flightservice.model.Flight;
import com.cts.flightbooking.flightservice.dto.FlightDto;
import com.cts.flightbooking.flightservice.exception.FlightErrorResponse;
import com.cts.flightbooking.flightservice.exception.FlightNotFoundException;
import com.cts.flightbooking.flightservice.service.FlightServiceInterface;


@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class FlightController {

	
	private FlightServiceInterface flightService;

	@Autowired
	public void setFlightService(FlightServiceInterface flightService) {
		this.flightService = flightService;
	}

	
	@GetMapping("/flights")
	public ResponseEntity<List<Flight>> getAllFlightDetails(){
		List<Flight> flights = this.flightService.getAllFlightDetails();
//		FlightDto flightDto = new FlightDto();
//		flightDto.setFlightList(flights);
		ResponseEntity<List<Flight>> responseEntity = new ResponseEntity<List<Flight>>(flights, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/flights/{id}")
	public ResponseEntity<Flight> getFlightById(@PathVariable Integer id){		
		Flight flight=this.flightService.getFlightById(id);
//		List<Flight> flightList = new ArrayList<>();
//		flightList.add(flight);
//		FlightDto flightDto = new FlightDto();
//		flightDto.setFlightList(flightList);
		ResponseEntity<Flight> responseEntity = new ResponseEntity<Flight>(flight, HttpStatus.OK);
		return responseEntity;
	}
	@PostMapping("/flights")
	public ResponseEntity<FlightDto> addFlights(@RequestBody Flight flight){
		Flight flightdetails = this.flightService.addFlight(flight);
		List<Flight> flightList = new ArrayList<>();
		flightList.add(flightdetails);
		FlightDto flightDto = new FlightDto();
		flightDto.setFlightList(flightList);
		ResponseEntity<FlightDto> responseEntity = new ResponseEntity<FlightDto>(flightDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@PutMapping("/flights/{id}")
	public ResponseEntity<FlightDto> updateFlight(@PathVariable Integer id,@RequestBody Flight flight){

		Flight flightDetails = this.flightService.updateFlight(id,flight);
		List<Flight> flightList = new ArrayList<>();
		flightList.add(flightDetails);
		FlightDto flightDto = new FlightDto();
		flightDto.setFlightList(flightList);
		ResponseEntity<FlightDto> responseEntity = new ResponseEntity<FlightDto>(flightDto, HttpStatus.OK);
		return responseEntity;
	}
	
	@DeleteMapping("/flights/{id}")
		public ResponseEntity<FlightDto> deleteFlight(@PathVariable Integer id){
		System.out.println("****** into update");
			Flight flightDetails = this.flightService.deleteFlight(id);
			List<Flight> flightList = new ArrayList<>();
			flightList.add(flightDetails);
			FlightDto flightDto = new FlightDto();
			flightDto.setFlightList(flightList);
			ResponseEntity<FlightDto> responseEntity = new ResponseEntity<FlightDto>(flightDto, HttpStatus.OK);
			return responseEntity;
	}
	
	@ExceptionHandler(FlightNotFoundException.class)
	public ResponseEntity<FlightErrorResponse> flightNotFoundExceptionHandler(FlightNotFoundException ex){
		
		FlightErrorResponse error = new FlightErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value(), System.currentTimeMillis());
		ResponseEntity<FlightErrorResponse> response = new ResponseEntity<FlightErrorResponse>(error, HttpStatus.NOT_FOUND);						
		return response;
	}
}
