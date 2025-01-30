package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Roles;

@Repository
public interface RolesDao extends JpaRepository<Roles, Integer>{

	List<Roles> findAll();
	
	Roles findById(int id);
	
	Roles save(Roles r);
	
	@Query(value = "delete from Roles where rid=?1",nativeQuery = true)
	@Modifying
	int deletById(int id);
}
