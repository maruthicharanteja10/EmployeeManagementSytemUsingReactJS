import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployees from "./components/ListEmployees";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/updateEmployee";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ViewEmployee from "./components/viewEmployee";
function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<UpdateEmployee />} />
        <Route path="/view/:id" element={<ViewEmployee />} />
        
      </Routes>
      <FooterComponent/>
    </Router>

    
  );
}

export default App;
