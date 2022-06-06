import './App.css';
import React from 'react';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainInfo" element={<MainInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
