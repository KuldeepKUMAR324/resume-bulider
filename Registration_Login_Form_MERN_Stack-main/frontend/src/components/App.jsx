import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Make sure Home.jsx is in the same directory
import Login from './Login';  // Make sure Login.jsx is in the same directory
import Register from './Register';  // Make sure Register.jsx is in the same directory

function App() {
  return (
    <BrowserRouter>
      <div style={{ }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
