package com.cts.flightbooking.flightservice.model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author User
 *
 */
@Entity
public class Flight {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String flightName;
	
	@Column
	private String flightNumber;

	public Flight(Integer id, String flightName, String flightNumber) {
		super();
		this.id = id;
		this.flightName = flightName;
		this.flightNumber = flightNumber;
	}

	public Flight() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", flightName=" + flightName + ", flightNumber=" + flightNumber + "]";
	}
	
	

	
	
}
