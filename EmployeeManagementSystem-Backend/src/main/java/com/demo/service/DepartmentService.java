package com.demo.service;

import java.util.List;

import com.demo.model.Departments;

public interface DepartmentService {
	
	List<Departments> findAll();
	
	Departments findById(int id);
	
	Departments save(Departments d);
	
	int deleteById(int id);

}
