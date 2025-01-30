package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.RolesDao;
import com.demo.model.Roles;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RolesServiceImpl implements RolesService{

	@Autowired
	private RolesDao rd;

	@Override
	public List<Roles> findAll() {
		return rd.findAll();
	}

	@Override
	public Roles findById(int id) {
		return rd.findById(id);
	}

	@Override
	public Roles save(Roles r) {
		return rd.save(r);
	}

	@Override
	public int deletById(int id) {
		return rd.deletById(id);
	}
	
}
