import React, {  useEffect, useState } from 'react';
import './style.css';
import '../../App.css';

import {Nav,Navbar} from 'react-bootstrap';
import Ryze from '../../images/new-logo-ryze.png';
const MobileNav = () => {
  return (
    <div className="mobile-nav-bar">
    <ul className="navbar-nav">
                  <li className="nav-item">
                  <Nav.Link href="/#features">Features</Nav.Link>
                  </li>
                  <li className="nav-item">
                  <Nav.Link href="resources">Resources</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="partner">Partners</Nav.Link>
                    
                  </li>
                  <li className="nav-item">
                  <Nav.Link href="/#contact">Contact</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <a
                      role="button"
                      className="signup-button"
                      href="https://cyrus.app/partnerships/ryze-signup/"
                    >
                      SIGN UP
                    </a>
                  </li>
                </ul>
    </div>
  )
}

function Navigation() {
    const [navClassName, setNavClassName] = useState(
        'container navbar'
      );
      const [toggleNavbar, setToggleNavbar] = useState(false);
      const listenScrollEvent = (event) => {
        if (window.scrollY < 60) {
          return setNavClassName('container navbar');
        } else if (window.scrollY > 61) {
          return setNavClassName('container navbar navbars-roll');
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
  return (
    <>
     
    <div className="nav-desktop">
        <Navbar className="fixed-top" bg="dark" expand="lg">
          <div className={navClassName}>
            <div className="container-fluid">
            <Nav.Link href="/"><img src={Ryze} width="45%" height="20%" alt="logo" /></Nav.Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Nav.Link href="/#features">Features</Nav.Link>
                    {/* <a className="nav-link" href="#features">
                      Features
                    </a> */}
                  </li>
                  <li className="nav-item">
                  <Nav.Link href="resources">Resources</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link href="partner">Partners</Nav.Link>
                    
                  </li>
                  <li className="nav-item">
                  <Nav.Link href="/#contact">Contact</Nav.Link>
                    {/* <a className="nav-link" href="#contact">
                      Contact
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <a
                      role="button"
                      className="signup-button"
                      href="https://cyrus.app/partnerships/ryze-signup/"
                    >
                      SIGN UP
                    </a>
                  </li>
                </ul>
              </div>
            </div>

           
          </div>
        </Navbar>
      </div>
      <div className="nav-mobile">
        <Navbar
          className="fixed-top"
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <div className={navClassName}>
            <div className="container-fluid">
              <img src={Ryze} width="20%" height="25%" alt="logo" />
              
              <div
                className="justify-content-end"
                style={{ display: 'flex' }}
              >
                {!toggleNavbar ? <i className="fas fa-bars"  onClick={() => setToggleNavbar(!toggleNavbar)} ></i> :<i className="fas fa-times"  onClick={() => setToggleNavbar(!toggleNavbar)} ></i> }
                
              </div>
              
            </div>
          </div>
          {toggleNavbar && <MobileNav />}
        </Navbar>
      </div>
      
    </>
  )
}

export default Navigation;