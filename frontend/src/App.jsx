import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Services from './views/Services/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
