package com.cts.flightbooking.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.flightbooking.userservice.model.User;


public interface UserRepositoryInterface extends JpaRepository<User, Integer>{

}
