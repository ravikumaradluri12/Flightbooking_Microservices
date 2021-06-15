package com.cts.flightbooking.userservice.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String userName;
	
	@Column
	private String userMailid;
	
	@Column
	private Long userMobileNo;
	
	@Column
	private String userPassword;

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserMailid() {
		return userMailid;
	}

	public void setUserMailid(String userMailid) {
		this.userMailid = userMailid;
	}

	public Long getUserMobileNo() {
		return userMobileNo;
	}

	public void setUserMobileNo(Long userMobileNo) {
		this.userMobileNo = userMobileNo;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", userMailid=" + userMailid + ", userMobileNo="
				+ userMobileNo + ", userPassword=" + userPassword + "]";
	}
	
	
}

