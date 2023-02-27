import './App.css';
import Spline from '@splinetool/react-spline';

import ryzeFooter from './images/rsz_new-logo-ryze.png';
import Ryze from './images/new-logo-ryze.png';
import ryzeLogo from './images/logo-ryze.png';
import ryzeMethodology from './images/metho.png';
import formImage from './images/Download-app-visual-desktop.png';
import cyrusLogo from './images/cyrus-logo.png';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div style={{ marginBottom: '100px' }}>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <div className="container navbar ">
          {/* <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary"> */}
          <div className="container-fluid">
            <img src={Ryze} width="15%" height="10%" alt="logo" />
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
                  <a
                    className="nav-link"
                    href="https://cyrus.app/partnerships/ryze-signup/"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://cyrus.app/partnerships/ryze-signup/"
                  >
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://cyrus.app/partnerships/ryze-signup/"
                  >
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

          {/* </nav> */}
        </div>
      </Navbar>

      <div className="main">
        <div className="container">
          <div className="hero-section">
            <div className="row desktop-view">
              <div className="col-md-12 col-lg-6 hero-text">
                <div>
                  <h1 className="hero-text-h1">
                    Secure Your Identity in the Digital Age with{' '}
                    <span className="hero-text-span">
                      Our Protection Services
                    </span>
                  </h1>
                  <p className="hero-text-p">
                    {' '}
                    Get world-class identity theft protection with
                    24/7 cybersecurity support, $1M insurance, white
                    glove restoration, and retroactive checkups. Also
                    includes digital identity and financial
                    protection, ATO prevention, and dark web
                    monitoring.
                  </p>
                  <div className="hero-button center">
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
              <div className="col-md-12 col-lg-6 spline-container">
                <Spline
                  className="spline-3"
                  scene="https://prod.spline.design/WOE5QmIwjnWLpHLC/scene.splinecode"
                />
              </div>
            </div>

            <div className="row small-screen-view">
              <div className="col-md-12 col-lg-6 spline-container">
                <Spline
                  className="spline-3"
                  scene="https://prod.spline.design/WOE5QmIwjnWLpHLC/scene.splinecode"
                />
              </div>
              <div className="col-md-12 col-lg-6 hero-text">
                <div>
                  <h1 className="hero-text-h1">
                    Secure Your Identity in the Digital Age with{' '}
                    <span className="hero-text-span">
                      Our Protection Services
                    </span>
                  </h1>
                  <p className="hero-text-p">
                    {' '}
                    Get world-class identity theft protection with
                    24/7 cybersecurity support, $1M insurance, white
                    glove restoration, and retroactive checkups. Also
                    includes digital identity and financial
                    protection, ATO prevention, and dark web
                    monitoring.
                  </p>
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

            <div className="statitcs-one-section">
              <h1 style={{ marginTop: '20px' }}>
                Our Mission Is Protecting You From Cybercrime And
                Fraud
              </h1>
              <div className="row">
                <div className="col-sm-12 col-md-6 card-dark">
                  {' '}
                  <div className="card" style={{ padding: '10px' }}>
                    <div>
                      <h3 className="statitic-text">
                        Over 22 <br /> Million
                      </h3>
                      <p className="statitic-p">
                        Account takeovers happen each year on
                        Instagram alone
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 card-dark">
                  {' '}
                  <div className="card" style={{ padding: '10px' }}>
                    <div>
                      <h3 className="statitic-text">
                        Every 22 <br /> Seconds
                      </h3>
                      <p className="statitic-p">
                        There is an identity theft case while reports
                        & attempts of fraud continue to increase each
                        year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 card-dark">
                  {' '}
                  <div className="card" style={{ padding: '10px' }}>
                    <div>
                      <h3 className="statitic-text">
                        $4.7 <br /> Million
                      </h3>
                      <p className="statitic-p">
                        Identiy theft and credit card fraud reports to
                        the FTC in 2020, +45% vs 2019
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 card-dark">
                  {' '}
                  <div className="card" style={{ padding: '10px' }}>
                    <div>
                      <h3 className="statitic-text">
                        $5.8 <br /> billion
                      </h3>
                      <p className="statitic-p">
                        Lost by consumers to fraud in 2020, an
                        increase of 70% from 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-section desktop-feature">
            <div className="row">
              <div className="col-sm-12 col-md-6 feature-section-text">
                Millitary Grade Digital Protection{' '}
                <span> In One Place</span>
              </div>
              <div className="col-sm-12 col-md-6"></div>
            </div>
            <div className="row" style={{ marginBottom: '50px' }}>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ol className="feature-list">
                  <li>
                    {' '}
                    Account-takeover (ATO) prevention for personal
                    email and social
                  </li>
                  <li>
                    {' '}
                    Deep & dark web threat detection for digital
                    assets{' '}
                  </li>
                  <li>
                    Privacy and protection from unauthorized access
                  </li>
                </ol>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card"></div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '50px' }}>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card-two"></div>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>
                  <ol className="feature-list">
                    <li>
                      {' '}
                      Anti fraud/ credit monitoring from all 3 Credit
                      Bureaus
                    </li>
                    <li>
                      Retroactive checkup to detect past identity
                      theft
                    </li>
                    <li>
                      $1M identity theft insurance & 24/7 support
                    </li>
                  </ol>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <button type="button" class="btn signup-button">
                      SIGN UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ol className="feature-list">
                  <li>
                    {' '}
                    Anti-malware defense & mobile threat detection
                  </li>
                  <li>
                    {' '}
                    Privacy-led security setting and configurations
                  </li>
                  <li>Location masking and safe-browsing (VPN)</li>
                </ol>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card-three"></div>
              </div>
            </div>
          </div>
          <div className="feature-section mobile-feature">
            <div className="row" style={{ marginBottom: '50px' }}>
              <div className="col-sm-12 col-md-6 feature-section-text">
                Millitary Grade Digital Protection{' '}
                <span> In One Place</span>
              </div>
              <div className="col-sm-12 col-md-6"></div>
            </div>
            <div className="row" style={{ marginBottom: '50px' }}>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card"></div>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '50px',
                }}
              >
                <ol className="feature-list">
                  <li>
                    {' '}
                    Account-takeover (ATO) prevention for personal
                    email and social
                  </li>
                  <li>
                    {' '}
                    Deep & dark web threat detection for digital
                    assets{' '}
                  </li>
                  <li>
                    Privacy and protection from unauthorized access
                  </li>
                </ol>
              </div>
            </div>
            <div className="row" style={{ marginBottom: '50px' }}>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card-two"></div>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '50px',
                }}
              >
                <div>
                  <ol className="feature-list">
                    <li>
                      {' '}
                      Anti fraud/ credit monitoring from all 3 Credit
                      Bureaus
                    </li>
                    <li>
                      Retroactive checkup to detect past identity
                      theft
                    </li>
                    <li>
                      $1M identity theft insurance & 24/7 support
                    </li>
                  </ol>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <button type="button" class="btn signup-button">
                      SIGN UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="feature-img-card-three"></div>
              </div>
              <div
                className="col-sm-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '50px',
                }}
              >
                <ol className="feature-list">
                  <li>
                    {' '}
                    Anti-malware defense & mobile threat detection
                  </li>
                  <li>
                    {' '}
                    Privacy-led security setting and configurations
                  </li>
                  <li>Location masking and safe-browsing (VPN)</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="statitcs-two-section">
            <div>
              <h1>Financial Crime On The Rise</h1>
              <div className="statitcs-two-container">
                <div className="row">
                  <div className="col-md-12 col-lg-4 center">
                    <div className="card" style={{ width: '18rem' }}>
                      <div className="card-body">
                        <div className="icon-container">
                          <span>
                            <i className="fas fa-arrow-up"></i>
                          </span>
                        </div>
                        <h5 className="card-title">+70%</h5>

                        <p className="card-text">
                          Increase in fraud cases in the past 2 years
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 center">
                    <div className="card" style={{ width: '18rem' }}>
                      <div className="card-body">
                        <div className="icon-container">
                          <img
                            src={ryzeLogo}
                            alt="ryze-logo"
                            width="64px"
                            height="75px"
                          />
                        </div>
                        <h5 className="card-title">
                          10K
                          <span
                            style={{
                              fontSize: '2.2rem',
                              color: '#12AE6D',
                            }}
                          >
                            +
                          </span>
                        </h5>

                        <p className="card-text">
                          Accounts recovered by RYZE this year
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 center">
                    <div className="card" style={{ width: '18rem' }}>
                      <div className="card-body">
                        <div className="icon-container">
                          <span>
                            <i className="fas fa-dollar-sign"></i>
                          </span>
                        </div>
                        <h5 className="card-title">$5.8B</h5>

                        <p className="card-text">
                          Lost by Americans due to indentity theft in
                          2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="methodology">
            <div className="methodology-container">
              <h1>
                Our <span>"Cyber Kill-Chain"</span> Methodology
              </h1>
              <div className="methodology-list-container">
                <ul>
                  <li>
                    Detect threat indicators to prevent identity theft
                    and account takeover
                  </li>
                  <li>
                    Alert individuals and financial institutions in
                    real-time{' '}
                  </li>
                  <li>
                    The individual kill-chain is the prologue of the
                    enterprise kill-chain
                  </li>
                </ul>
              </div>

              <div className="methodology-img-container">
                <img src={ryzeMethodology} alt="Ryze-methodology" />
              </div>
            </div>
          </div>
          <div className="social-section social-desktop-view">
            <div className="row">
              <div className="col-md-12 col-lg-7 hero-text">
                <div>
                  <h1 className="social-section-h1">
                    <span>STOP</span> Identities Theft & Cybercrime
                    With RYZE
                  </h1>
                  <p className="social-section-p">
                    {' '}
                    Get world-class identity theft protection with
                    24/7 cybersecurity support, $1M insurance, white
                    glove restoration, and retroactive checkups. Also
                    includes digital identity and financial
                    protection, ATO prevention, and dark web
                    monitoring.
                  </p>
                  <a
                    role="button"
                    className="signup-button"
                    href="https://cyrus.app/partnerships/ryze-signup/"
                  >
                    SIGN UP
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 ">
                <div className="center">
                  <div className="lotties-card"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-section social-small-screen-view">
            <div className="row">
              <div className="col-md-12 col-lg-5 ">
                <div className="center">
                  <div className="lotties-card"></div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 socail-text">
                <div>
                  <h1 className="social-section-h1">
                    <span>STOP</span> Identities Theft & Cybercrime
                    With RYZE
                  </h1>
                  <p className="social-section-p">
                    {' '}
                    Get world-class identity theft protection with
                    24/7 cybersecurity support, $1M insurance, white
                    glove restoration, and retroactive checkups. Also
                    includes digital identity and financial
                    protection, ATO prevention, and dark web
                    monitoring.
                  </p>
                  <div className="center">
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
          </div>
          <div className="package-section">
            <div className="row">
              <div className="col-md-12 col-lg-7 center">
                <div className="package-img-container">
                  {/* <img src={threeScreens} alt="three-screen" /> */}
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="center">
                  <div className="package-text">
                    <h1>Your Security Package</h1>

                    <p>
                      Sign-Up – Sign up with your email. After
                      confirming registration in your inbox, you’ll
                      have full access to our modern identity theft
                      protection app, at no charge during the test
                      period.
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      <button type="button" class="btn signup-button">
                        SIGN UP
                      </button>
                    </div>
                    <p>
                      {' '}
                      Enjoy the app – You now have full access to our
                      services including
                      <ul>
                        <li>Email account security </li>
                        <li>Triple-bureau credit monitoring</li>
                        <li> Device protection </li>
                        <li> Password safety</li>
                        <li>Dark web scanning </li>
                        <li>24/7 security experts standing by</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className=" container">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-sm-12 col-md-6 form-container">
                <div style={{ width: '100%' }}>
                  <h1>CONTACT US</h1>
                  <div>
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn signup-button"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 form-image-container">
                <img src={formImage} alt="form-iamge" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
