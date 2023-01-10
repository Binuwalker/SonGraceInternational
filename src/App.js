import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Signin from './components/Signin';
import Trips from './components/Trips';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/loginsignin' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
