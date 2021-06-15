package com.cts.flightbooking.flightservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.flightservice.model.Flight;



/**
 * @author User
 *
 */
@Component
public interface FlightRepositoryInterface extends JpaRepository<Flight, Integer>{

}

