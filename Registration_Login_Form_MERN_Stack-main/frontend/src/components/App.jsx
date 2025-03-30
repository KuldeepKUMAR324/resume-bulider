import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Make sure Home.jsx is in the same directory
import Login from './Login';  // Make sure Login.jsx is in the same directory
import Register from './Register';
import About from './About'; 
import Services from './Services';
import Design from './Design' ;// Make sure Register.jsx is in the same directory

function App() {
  return (
    <BrowserRouter>
      <div style={{ }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About/>} /> Placeholder for About component */}
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} /> 
          <Route path="Services" element={<Services/>}/>
          <Route path="Design" element={<Design/>}/>
          {/* Placeholder for About component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
