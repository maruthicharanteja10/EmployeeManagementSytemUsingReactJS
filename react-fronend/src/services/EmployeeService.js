import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

// Fetch all employees
const getEmployees = () => {
  return axios.get(API_URL);
};

// Fetch a single employee by ID
const getEmployee = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Create a new employee
const createEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

// Update an existing employee by ID
const updateEmployee = (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};

// Delete an employee by ID
const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const EmployeeService = {
  getEmployees,
  getEmployee, // Make sure this function is exported
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

export default EmployeeService;
