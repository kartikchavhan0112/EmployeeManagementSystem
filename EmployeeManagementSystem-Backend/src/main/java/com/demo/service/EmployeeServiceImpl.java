package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.EmployeeDao;
import com.demo.model.Employees;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	private EmployeeDao ed;

	@Override
	public Employees save(Employees e) {
		return ed.save(e);
	}

	@Override
	public List<Employees> findAll() {
		return ed.findAll();
	}

	@Override
	public Employees findById(int id) {
		return ed.findById(id);
	}

	@Override
	public int deleteEmployee(int id) {
		ed.deleteEmployeeRoles(id);
		return ed.deleteById(id);
		
	}

	

	
}
