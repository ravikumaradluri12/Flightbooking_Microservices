package com.cts.flightbooking.scheduleflightservice.repository;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Component;

	import com.cts.flightbooking.scheduleflightservice.model.ScheduleFlights;


	@Component
	public interface ScheduleFlightsRepository extends JpaRepository<ScheduleFlights, String>{

	}

