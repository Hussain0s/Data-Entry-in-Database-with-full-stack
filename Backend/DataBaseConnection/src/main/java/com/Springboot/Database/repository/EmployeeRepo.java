package com.Springboot.Database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Springboot.Database.entity.Employee;

// Employee Repository interface extending JPA Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
