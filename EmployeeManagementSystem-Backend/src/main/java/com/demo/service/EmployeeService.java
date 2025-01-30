package com.demo.service;

import java.util.List;

import com.demo.model.Employees;

public interface EmployeeService {
	
	Employees save(Employees e);
	
	List<Employees> findAll();
	
	Employees findById(int id);
	
	int deleteEmployee(int id);

}
