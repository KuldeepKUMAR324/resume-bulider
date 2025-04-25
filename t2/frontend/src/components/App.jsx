import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';  
import Login from './Login';  
import Register from './Register';
import About from './About'; 


import Edit from './Edit'; 


function App() {
  return (
    <BrowserRouter>
      <div style={{ }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} /> 
          
         < Route path="Edit" element={<Edit />} />
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
