package com.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Departments {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long did;
	private String dname;
	
	@OneToMany(mappedBy = "departments",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Employees> employees = new ArrayList<>();

	@Override
	public String toString() {
		return "Departments [did=" + did + ", dname=" + dname + "]";
	}

	public long getDid() {
		return did;
	}

	public void setDid(long did) {
		this.did = did;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public List<Employees> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employees> employees) {
		this.employees = employees;
	} 
}
