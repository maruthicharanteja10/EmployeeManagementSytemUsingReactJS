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
    <div class="container">
    <div className="container mt-4 border border-rounded">
      <h2>Update Employee</h2>
      <br />
      <br />
      <form>
        Employee FirstName:{" "}
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <br />
        Employee LastName:{" "}
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <br />
        Employee Email:
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn btn-primary" onClick={updateEmployee}>
          Update
        </button>
      </form>
      <br />
    </div>
     <div className="d-flex justify-content-end"> <button className="btn btn-primary mt-2 " onClick={() => navigate("/")}>
     Back to List
   </button></div>
   </div>
  );
};

export default UpdateEmployee;
