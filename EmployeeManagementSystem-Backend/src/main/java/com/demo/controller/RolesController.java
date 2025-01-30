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

import com.demo.model.Roles;
import com.demo.service.RolesService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RolesController {
	@Autowired
	private RolesService rs;
	
	@GetMapping(value = "/roles")
	public List<Roles> getAllRoles(){
		return rs.findAll();
	}
	
	@GetMapping(value = "/roles/{id}")
	public Roles getRoleById(@PathVariable int id) {
		return rs.findById(id);
	}
	
	@PostMapping(value = "/roles")
	public Roles addRole(@RequestBody Roles r) {
		return rs.save(r);
	}
	
	@PutMapping(value = "/roles/{id}")
	public Roles updateRole(@PathVariable int id, @RequestBody Roles r) {
		r.setRid(id);
		return rs.save(r);
	}
	
	@DeleteMapping(value = "/roles/{id}")
	public int deleteRole(@PathVariable int id) {
		return rs.deletById(id);
	}
}
