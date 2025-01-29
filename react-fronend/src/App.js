import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployees from './components/ListEmployees';
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/updateEmployee";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<ListEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<UpdateEmployee />} />
    </Routes>
</Router>
);
};

export default App;