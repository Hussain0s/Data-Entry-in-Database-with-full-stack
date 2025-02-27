package com.Springboot.Database.entity;

import jakarta.persistence.*;

/**
 * Entity class representing an Employee.
 */
@Entity
@Table
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String number;

    @Column(nullable = false)
    private double salary;

    @Column(nullable = false)
    private String work;

    // Default constructor
    public Employee() {}

    // Parameterized constructor
    public Employee(String name, String email, String number, double salary, String work) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.salary = salary;
        this.work = work;
    }

    // Getters and Setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }

    public String getWork() { return work; }
    public void setWork(String work) { this.work = work; }

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", number=" + number + ", salary="
				+ salary + ", work=" + work + "]";
	}
}


