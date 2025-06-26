import React from 'react';
import Homepage from "./Pages/Homepage";
import AddEmp from "./Pages/AddEmp"; 

import Profile from "./pages/Profile";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Add" element={<AddEmp />} />
        <Route path="/Profile" element={<Profile />} />
       
        <Route path="/Landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
   