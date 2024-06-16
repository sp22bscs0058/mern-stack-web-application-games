import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const linkStyle = {
    color: 'black',
    padding: '10px 20px', 
    borderRadius: '5px', 
    margin: '0 10px', 
    display: 'inline-block' 
  
  };

  const linkHoverStyle = {

  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">ASM GAMERS</Link>
           
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/products"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                     PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/AboutUs"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    ABOUT US
                  </Link>
                
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;