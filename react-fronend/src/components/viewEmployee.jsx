import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {
    const { id } = useParams(); // Get employee ID from URL
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getEmployee(id)
            .then((response) => setEmployee(response.data))
            .catch((error) => console.error("Error fetching employee:", error));
    }, [id]);

    if (!employee) {
        return <h2 className="text-center">Loading...</h2>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center">Employee Details</h2>
            <div className="card p-4">
                <p><strong>First Name:</strong> {employee.firstname}</p>
                <p><strong>Last Name:</strong> {employee.lastname}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                
            </div>
            <div className="d-flex justify-content-end"> <button className="btn btn-primary mt-2 " onClick={() => navigate("/")}>
        Back to List
      </button></div>
        </div>
    );
};

export default ViewEmployee;
