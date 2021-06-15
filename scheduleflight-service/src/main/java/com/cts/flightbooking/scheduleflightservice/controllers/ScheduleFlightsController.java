package com.cts.flightbooking.scheduleflightservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.flightbooking.scheduleflightservice.model.ScheduleFlights;
import com.cts.flightbooking.scheduleflightservice.repository.ScheduleFlightsRepository;
//import com.cts.flightbooking.scheduleflightservice.dto.FlightDto;
import com.cts.flightbooking.scheduleflightservice.service.ScheduleFlightsService;


@CrossOrigin
@RestController
@RequestMapping("/bookflightapp")
public class ScheduleFlightsController {

	@Autowired
	ScheduleFlightsService sfs;
	
	@PostMapping("/scheduledflights")
	public ResponseEntity<ScheduleFlights> addFlights(@RequestBody ScheduleFlights flight) {
		System.out.println("superrrrr  r"+flight);
	
		sfs.saveScheduleFlights(flight);
		ResponseEntity<ScheduleFlights> responseEntity = new ResponseEntity<ScheduleFlights>(flight, HttpStatus.OK);
		return responseEntity;

		

	}
	@PutMapping("/scheduledflights")
	public ResponseEntity<ScheduleFlights> updateFlights(@RequestBody ScheduleFlights flight){
		
		sfs.updateScheduleFlights(flight);
		
		ResponseEntity<ScheduleFlights> responseEntity = new ResponseEntity<ScheduleFlights>(flight, HttpStatus.OK);
		return responseEntity;
	}
	@GetMapping("/scheduledflights")
	public ResponseEntity<List<ScheduleFlights>> getFlights(){
		System.out.println("hi====");
		List<ScheduleFlights> flight =sfs.getAllScheduleFlights();
		
		ResponseEntity<List<ScheduleFlights>> responseEntity = new ResponseEntity<List<ScheduleFlights>>(flight, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/scheduledflights/{id}")
	public ResponseEntity<ScheduleFlights> getFlightsByNumber(@PathVariable String id){
		
		ScheduleFlights flight =sfs.getScheduleFlightsById(id);
		
		ResponseEntity<ScheduleFlights> responseEntity = new ResponseEntity<>(flight, HttpStatus.OK);
		return responseEntity;
	}
	
	@DeleteMapping("/scheduledflights/{id}")
	public ResponseEntity<String> deleteFlights(@PathVariable String id){
		
             sfs.deleteScheduleFlightsById(id);
		
		ResponseEntity<String> responseEntity = new ResponseEntity<>(id, HttpStatus.OK);
		return responseEntity;
	}
	
	
}