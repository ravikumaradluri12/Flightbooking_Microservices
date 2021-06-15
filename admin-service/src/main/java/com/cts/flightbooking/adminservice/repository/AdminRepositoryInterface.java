package com.cts.flightbooking.adminservice.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.adminservice.model.Admin;


@Component
public interface AdminRepositoryInterface extends JpaRepository<Admin, String>{

}

