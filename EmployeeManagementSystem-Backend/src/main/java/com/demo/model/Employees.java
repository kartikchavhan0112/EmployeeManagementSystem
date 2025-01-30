package com.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;


@Entity
public class Employees {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long eid;
	private String ename;
	private String eemail;
	@Column(columnDefinition = "double(10,2)")
	private double esalary;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "department_did")
	@JsonIgnore
	private Departments departments;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "employees_roles",
	        joinColumns = @JoinColumn(name = "employees_eid"),
	        inverseJoinColumns = @JoinColumn(name = "roles_rid")
	    )
	@JsonIgnore
	private List<Roles> roles = new ArrayList<>();

	@Override
	public String toString() {
		return "Employees [eid=" + eid + ", ename=" + ename + ", eemail=" + eemail + ", esalary=" + esalary + "]";
	}

	public long getEid() {
		return eid;
	}

	public void setEid(long eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEemail() {
		return eemail;
	}

	public void setEemail(String eemail) {
		this.eemail = eemail;
	}

	public double getEsalary() {
		return esalary;
	}

	public void setEsalary(double salary) {
		this.esalary = salary;
	}

	public Departments getDepartment() {
		return departments;
	}

	public void setDepartment(Departments department) {
		this.departments = department;
	}

	public List<Roles> getRoles() {
		return roles;
	}

	public void setRoles(List<Roles> roles) {
		this.roles = roles;
	}
}
