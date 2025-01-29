import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployees from "./components/ListEmployees";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/updateEmployee";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<UpdateEmployee />} />
      </Routes>
      <FooterComponent/>
    </Router>
  );
}

export default App;
