import Homepage from "./Pages/Homepage";
import AddEmp from "./Pages/AddEmp";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Add" element={<AddEmp />} />
      </Routes>
    </Router>
  );
}

export default App;
