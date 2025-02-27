import React from "react";
import "../styles.css";

const EmployeeCard = ({ employee, setEditingEmployee }) => {
  return (
    <div className="card">
      <div>
        <h3>{employee.name}</h3>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.number}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
        <p><strong>Work Role:</strong> {employee.work}</p>
      </div>
      <button onClick={() => setEditingEmployee(employee)}>Modify</button>
    </div>
  );
};

export default EmployeeCard;
