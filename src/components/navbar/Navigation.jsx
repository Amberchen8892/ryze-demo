import React, {  useEffect, useState } from 'react';

import '../../App.css';
import {Nav,Navbar} from 'react-bootstrap';
import Ryze from '../../images/new-logo-ryze.png';


function Navigation() {
    const [navClassName, setNavClassName] = useState(
        'container navbar'
      );
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
                    <Nav.Link href="partner">Partner</Nav.Link>
                    
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
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
                
                <div className="mobile-sign-up">
                  <a
                    role="button"
                    className="signup-button"
                    href="https://cyrus.app/partnerships/ryze-signup/"
                  >
                    SIGN UP
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation;