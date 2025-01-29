import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.createEmployee(employee).then(() => navigate("/"));
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form>
                <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <button onClick={saveEmployee}>Save</button>
            </form>
        </div>
    );
};

export default AddEmployee;
