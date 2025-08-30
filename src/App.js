import React, { createContext, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseState from './components/UseState/UseState';
import UseEffect from './components/UseEffect/UseEffect'
import DataFetcher from './components/UseEffect/DataFetcher';
import LoggerComponent from './components/UseEffect/LoggerComponent';
import ResizeComponent from './components/UseEffect/ResizeComponent';
import MultiEffectComponent from './components/UseEffect/MultiEffectComponent';
import TimeComponent from './components/UseEffect/TimeComponent';
import ChildA from './components/UseContext/ChildA';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import StateLifting from './components/StateLifting';
//step1: create context
const UserContext = createContext();
//step 2: wrapp all the child inside the provider
//step 3: pass the value
//step 4: go to consumer to consume value

const ThemeContext = createContext();


function App() {
  const [user, setUser] = useState({ name: "Kajal" });
  const [theme, setTheme] = useState('light');
  //create state
  //manage state
  //change state
  //sbhi child ko state ko sync karwadenge
  const[name,setName]=useState('');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/datafetcher" element={<DataFetcher />} />
        <Route path="/loggercomponent" element={<LoggerComponent />} />
        <Route path="/timecomponent" element={<TimeComponent />} />
        <Route path="/resizecomponent" element={<ResizeComponent />} />
        <Route path="/multieffectcomponent" element={<MultiEffectComponent />} />
        <Route path="/childA" element={
          <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <div id="container" style={{ backgroundColor: theme === 'light' ? 'antiquewhite' : 'gray', }}>
                <ChildA />
              </div>
            </ThemeContext.Provider>
          </UserContext.Provider>} />
          <Route path="/statelifting" element={<StateLifting  name={name} setName={setName}/>} />
          <Route path="/conditionalrendering" element={<ConditionalRendering />} />
      </Routes>
    </Router>
  );
}

export default App;
export {UserContext}
export { ThemeContext }
