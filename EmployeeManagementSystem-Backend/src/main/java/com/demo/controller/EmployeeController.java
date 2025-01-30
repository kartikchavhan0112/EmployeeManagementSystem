package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Employees;
import com.demo.service.EmployeeService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	@Autowired
	private EmployeeService es;
	
	//addEmployeees 
	@PostMapping(value = "/employees", consumes = "application/json", produces = "application/json")
	public Employees addEmployee(@RequestBody Employees e) {
		return es.save(e);
	}
	
	//getAllEmployees
	@GetMapping(value = "/employees")
	public List<Employees> getAllEmployees() {
		return es.findAll();
	}
	
	//updateEmployees 
	@PutMapping(value = "/employees/{id}")
	public Employees updateEmployee(@PathVariable int id,@RequestBody Employees e) {
		e.setEid(id);
		return es.save(e);
	}
	
	//getEmployeesById
	@GetMapping(value = "/employees/{id}")
	public Employees getEmployeeById(@PathVariable int id) {
		return es.findById(id);
	}
	
	//deleteEmployee
	@DeleteMapping(value = "/employees/{id}")
	public int deleteEmployee(@PathVariable int id) {
		return es.deleteEmployee(id);
	}
}
