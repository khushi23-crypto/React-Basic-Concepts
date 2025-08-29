import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect/UseEffect'
import DataFetcher from './components/DataFetcher';
import LoggerComponent from './components/LoggerComponent';
import ResizeComponent from './components/ResizeComponent';
/* import MultiEffectComponent from './components/MultiEffectComponent';
 *//* import TimeComponent from './components/TimeComponent';
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/datafetcher" element={<DataFetcher />} />
        <Route path="/loggercomponent" element={<LoggerComponent />} />
        {/*         <Route path="/timecomponent" element={<TimeComponent />} />
 */}
        <Route path="/resizecomponent" element={<ResizeComponent />} />
{/*      <Route path="/multieffectcomponent" element={<MultiEffectComponent />} />
 */}      </Routes>
    </Router>
  );
}

export default App;
