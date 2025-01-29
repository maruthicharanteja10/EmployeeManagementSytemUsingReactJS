import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        // Fetch the employee details based on ID
        EmployeeService.getEmployee(id).then((response) => {
            setEmployee(response.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id,employee).then(() => navigate("/"));
    };

    return (
        <div>
            <h2>Update Employee</h2>
            <form>
                <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <button onClick={updateEmployee}>Update</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
