package com.cts.flightbooking.scheduleflightservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.scheduleflightservice.model.ScheduleFlights;
import com.cts.flightbooking.scheduleflightservice.repository.ScheduleFlightsRepository;
@Component
public class ScheduleFlightsService {
	@Autowired
	ScheduleFlightsRepository sfr;
	
	public void saveScheduleFlights(ScheduleFlights sf)
	{
		sfr.save(sf);
	}
	
	public void updateScheduleFlights(ScheduleFlights sf)
	{
		sfr.save(sf);
	}
	
	public List<ScheduleFlights> getAllScheduleFlights()
	{
		return sfr.findAll();
	}
	public void deleteScheduleFlightsById(String id)
	{
		sfr.deleteById(id);
	}
	public  ScheduleFlights getScheduleFlightsById(String id)
	{
		return sfr.findById(id).get();	
		}

}
