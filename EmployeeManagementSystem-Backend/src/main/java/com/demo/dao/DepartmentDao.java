package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Departments;

@Repository
public interface DepartmentDao extends JpaRepository<Departments, Integer>{
	
	List<Departments> findAll();
	
	Departments findById(int id);
	
	Departments save(Departments d);
	
	@Query(value = "delete from Departments where did=?1",nativeQuery = true)
	@Modifying
	int deleteById(int id);

}
