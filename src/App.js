import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect/UseEffect'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </Router>
  );
}

export default App;
