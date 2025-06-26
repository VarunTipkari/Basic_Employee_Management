import React from 'react';
import Homepage from "./Pages/Homepage";
import AddEmp from "./Pages/AddEmp"; 
import Update from "./pages/Update";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Add" element={<AddEmp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
// Compare this snippet from Basic_Employee_Management/frontend/src/Pages/Homepage.jsx:   