package com.projects.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projects.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
