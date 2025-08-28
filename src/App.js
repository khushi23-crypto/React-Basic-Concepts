import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseState from './components/UseState';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/usestate" element={<UseState />} />
      </Routes>
    </Router>
  );
}

export default App;
