import React from 'react';
import '../../App.css';
import ryzeFooter from '../../images/rsz_new-logo-ryze.png';
import cyrusLogo from '../../images/cyrus-logo.png';
function Footer() {
  return (
    <>
    <div className="container footer">
        <div>
          <div className=" footer-logo-container">
            <div className="ryze-logo-container center">
              <img src={ryzeFooter} alt="ryze-logo" />
            </div>
            <div className="footer-text">POWERED BY</div>
            <div className="cyrus-logo-container center">
              <img src={cyrusLogo} alt="cyrus-logo" />
            </div>
          </div>
          <div>
            <p className="all-rights-reserved">
              © 2023 Ryze. All rights reserved.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer