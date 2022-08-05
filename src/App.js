import './App.css';
import Services from './components/Services/Services';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/login/Login';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}>
      </Route>

      <Route path="services" element={<Services />}></Route>
      <Route path="login" element={<Login />}></Route>

    </Routes>

  );
}

export default App;
