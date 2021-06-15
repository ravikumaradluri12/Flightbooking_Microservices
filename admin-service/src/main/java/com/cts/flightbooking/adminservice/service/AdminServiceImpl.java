package com.cts.flightbooking.adminservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.flightbooking.adminservice.model.Admin;
import com.cts.flightbooking.adminservice.repository.AdminRepositoryInterface;

@Component
public class AdminServiceImpl implements AdminServiceInterface{

	@Autowired
	private AdminRepositoryInterface adminRepository;

	@Override
	public List<Admin> getAdminDetails() {
		// TODO Auto-generated method stub
		return this.adminRepository.findAll();
	}
	
	
}
