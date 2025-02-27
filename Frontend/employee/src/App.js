import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showEmployees, setShowEmployees] = useState(false); // State to control visibility

  // Fetch employees from backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/employee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="app-container">
      <h1>Employee Management</h1>
      <EmployeeForm 
        fetchEmployees={fetchEmployees} 
        editingEmployee={editingEmployee} 
        setEditingEmployee={setEditingEmployee} 
      />

      {/* Button to toggle employee list visibility */}
      <button onClick={() => setShowEmployees(!showEmployees)}>
        {showEmployees ? "Hide Employees" : "Show Employee Database"}
      </button>

      {/* Show EmployeeList only when showEmployees is true */}
      {showEmployees && (
        <EmployeeList employees={employees} setEditingEmployee={setEditingEmployee} />
      )}
    </div>
  );
};

export default App;
