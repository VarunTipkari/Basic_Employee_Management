import React from 'react';
import Homepage from "./Pages/Homepage";
import AddEmp from "./Pages/AddEmp"; 
import Update from "./Pages/Update";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Add" element={<AddEmp />} />
        <Route path="/Profile/:employeeId" element={<Profile />} />
        <Route path="/Update/:employeeId" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
// Compare this snippet from Basic_Employee_Management/frontend/src/Pages/Homepage.jsx:   