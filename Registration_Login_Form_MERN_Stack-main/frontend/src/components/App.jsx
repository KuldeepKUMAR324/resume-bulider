import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';  
import Login from './Login';  
import Register from './Register';
import About from './About'; 
import Services from './Services';
import Design from './Design' ;
import Contact from './Contact';
import Score from './Score';

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
          <Route path="Services" element={<Services/>}/>
          <Route path="Design" element={<Design/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Score" element={<Score/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
