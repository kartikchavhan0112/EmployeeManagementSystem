package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.DepartmentDao;
import com.demo.model.Departments;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService{

	@Autowired
	private DepartmentDao dd;

	@Override
	public List<Departments> findAll() {
		return dd.findAll();
	}

	@Override
	public Departments findById(int id) {
		return dd.findById(id);
	}

	@Override
	public Departments save(Departments d) {
		return dd.save(d);
	}

	@Override
	public int deleteById(int id) {
		return dd.deleteById(id);
	}
	 
}
