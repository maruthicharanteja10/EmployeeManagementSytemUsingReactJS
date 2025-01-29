import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee).then(() => navigate("/"));
  };

  return (
    <div className="container mt-4 border border-rounded">
      <h2>Add Employee</h2>
      <br/>  <br/>
      <form>
        Employee FirstName:{" "}
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br /> <br />
        Employee LastName:
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br /> <br />
        Employee Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button className="btn btn-primary " onClick={saveEmployee}>
          Save
        </button>
        
      </form>
      <br/>
    </div>
  );
};

export default AddEmployee;
