import './App.css';
import React from 'react';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import Auth from './pages/Auth';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const kakao = window.Kakao;

  useEffect(() => {
    kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, [kakao]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainInfo" element={<MainInfo />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
