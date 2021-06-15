package com.cts.flightbooking.adminservice.model;

//package com.flightbooking.adminservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {



	@Id
	private String adminid;
	
	@Column
	private String password;

	public String getAdminid() {
		return adminid;
	}

	public void setAdminid(String adminid) {
		this.adminid = adminid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}	
	@Override
	public String toString() {
		return "Admin [adminid=" + adminid + ", password=" + password + "]";
	}
}

