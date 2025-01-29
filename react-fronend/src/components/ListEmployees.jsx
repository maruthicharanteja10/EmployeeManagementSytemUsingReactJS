import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const editEmployee = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteEmployee = async (id) => {
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Employees</h2>
      <button className="btn btn-primary" onClick={() => navigate("/add")}>
        Add Employee
      </button>

      <br />
      <br />
      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td className="justify-content-center">
                <button
                  onClick={() => editEmployee(employee.id)}
                  className="btn btn-warning "
                >
                  Update
                </button>

                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn btn-danger "
                >
                  Delete
                </button>
                <button onClick={() => navigate(`/view/${employee.id}`)} className="btn btn-info">
    View
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
