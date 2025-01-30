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

import com.demo.model.Departments;
import com.demo.service.DepartmentService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DepartmentController {

	@Autowired
	private DepartmentService ds;	
	
	@GetMapping(value = "/departments")
	public List<Departments> getAllDepartments(){
		return ds.findAll();
	}
	
	@GetMapping(value = "/departments/{id}")
	public Departments getDepartmentById(@PathVariable int id) {
		return ds.findById(id);
	}
	
	@PostMapping(value = "/departments")
	public Departments addDepartment(@RequestBody Departments d) {
		
		return ds.save(d);
	}
	
	@PutMapping(value = "/departments/{id}")
	public Departments updateDepartment(@PathVariable int id, @RequestBody Departments d) {
		d.setDid(id);
		return ds.save(d);
	}
	
	@DeleteMapping(value = "/departments/{id}")
	public int deleteDepartment(@PathVariable int id) {
		return ds.deleteById(id);
	}
}
