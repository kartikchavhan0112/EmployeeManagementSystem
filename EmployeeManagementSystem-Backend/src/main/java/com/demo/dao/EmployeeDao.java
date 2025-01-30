package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Employees;

import jakarta.transaction.Transactional;

@Repository
public interface EmployeeDao extends JpaRepository<Employees, Integer>{
	
	//save and update 
	Employees save(Employees e);
	
	List<Employees> findAll();
	
	Employees findById(int id);
	
	@Transactional
	@Modifying
	@Query(value = "delete from employees_roles where employees_eid = ?1", nativeQuery = true)
	void deleteEmployeeRoles(int id);

	@Transactional
	@Modifying
	@Query(value = "delete from Employees where eid = ?1", nativeQuery = true)
	int deleteById(int id);
	
	
	

 
	
}
