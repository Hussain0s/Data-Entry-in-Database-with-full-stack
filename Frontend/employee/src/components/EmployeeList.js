import React from "react";
import EmployeeCard from "./EmployeeCard";
import "../styles.css";

const EmployeeList = ({ employees, setEditingEmployee }) => {
  return (
    <div className="list-container">
      <h2>Employee Data</h2>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} setEditingEmployee={setEditingEmployee} />
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
