import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const navigate = useNavigate();
  const { id } = useParams(); // Get the employee ID from the URL

  useEffect(() => {
    // Fetch the employee details based on ID when the component mounts
    EmployeeService.getEmployee(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the employee!", error);
      });
  }, [id]); // This effect depends on the employee ID from the URL

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then(() => {
        navigate("/"); // Redirect to the employee list after update
      })
      .catch((error) => {
        console.error("There was an error updating the employee!", error);
      });
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form>
        <input
          type="text"
          name="firstname"
          value={employee.firstname}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input       type="text"
          name="lastname"
          value={employee.lastname}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button onClick={updateEmployee}>Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
