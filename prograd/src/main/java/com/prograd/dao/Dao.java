package com.prograd.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prograd.model.Employee;

@Repository
public interface Dao extends JpaRepository<Employee, Long> {

}
