package com.demo.service;

import java.util.List;

import com.demo.model.Roles;

public interface RolesService {

	List<Roles> findAll();
	
	Roles findById(int id);
	
	Roles save(Roles r);
	
	int deletById(int id);
}
