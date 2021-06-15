package com.cts.flightbooking.userbookingservice.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.userbookingservice.model.UserBooking;

@Component
public interface UserBookingRepositoryInterface extends JpaRepository<UserBooking, Integer>{

}
