import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

const EmployeeForm = ({ fetchEmployees, editingEmployee, setEditingEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    number: "",
    salary: "",
    work: "",
  });

  // ✅ Update form fields when editingEmployee changes
  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    } else {
      setEmployee({ name: "", email: "", number: "", salary: "", work: "" });
    }
  }, [editingEmployee]);

  // Handle input changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle form submission (Insert or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEmployee) {
        // Update existing employee
        await axios.put(`http://localhost:8081/api/employee/${editingEmployee.id}`, employee);
        alert("Employee updated successfully!");
      } else {
        // Insert new employee
        await axios.post("http://localhost:8081/api/employee", employee);
        alert("Employee added successfully!");
      }
      setEmployee({ name: "", email: "", number: "", salary: "", work: "" });
      setEditingEmployee(null); // Reset editing state
      fetchEmployees();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
        <input type="text" name="number" placeholder="Phone Number" value={employee.number} onChange={handleChange} required />
        <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} required />
        <input type="text" name="work" placeholder="Work Role" value={employee.work} onChange={handleChange} required />
        <button type="submit">{editingEmployee ? "Update Employee" : "Submit"}</button><br/><br/>
      </form>
    </div>
  );
};

export default EmployeeForm;
