import './css/App.css';
import './css/Navbar.css';
import './css/Footer.css';
import './css/AboutUs.css';
import './css/Contact.css';
import './css/Products.css';
import './css/Index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Callout from './components/Callout.js';
import AboutUs from './components/AboutUs.js';
import Contact from './components/Contact.js';
import Products from './components/Products.js';
import Index from './components/Index.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  };



  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Callout/>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Navigate replace to="/src/components/Index" />} />
            <Route path="/src/components/Index" element={<Index/>} />
            <Route path="/src/components/AboutUs" element={<AboutUs/>} />
            <Route path="/src/components/Contact" element={<Contact/>} />
            <Route path="/src/components/Products" element={<Products/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
