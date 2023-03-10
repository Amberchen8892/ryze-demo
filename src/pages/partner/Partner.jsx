import React from "react";
import "./style.css";
import backgroundVid from "../../images/demo.mp4";
import partnerMobile from "../../images/mobile-partner.svg";
function Partner() {
  return (
    <>
      <div className="partner-hero-section">
        <div className="wraper-overlay center ">
          <div className="container ">
            <div className="wrapper center">
              <div className="partner-hero-section-text">
                <h1>
                  Protect Your Business <br />
                  By Protecting Your Employees
                </h1>
                <p>
                  It’s no secret that cyber attacks are on the rise, and
                  companies of all sizes are at risk. RYZE protects your
                  employees’ personal accounts to prevent enterprise level
                  breaches and hacks.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    className="btn btn-success demo-button"
                    href="https://calendly.com/myryze/demo"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-hero-section-mobile-view">
        <div className="container">
          <div class="row">
            <div class="col-12 partner-mobile-img">
              <img src={partnerMobile} alt="partner view on mobile device" />
            </div>
            <div class="col-12">
              <div
                className="partner-hero-section-text"
                style={{ marginTop: "30px" }}
              >
                <h1>
                  Protect <span>Your Business</span> <br />
                  By Protecting Your Employees
                </h1>
                <p>
                  It’s no secret that cyber attacks are on the rise, and
                  companies of all sizes are at risk. RYZE protects your
                  employees’ personal accounts to prevent enterprise level
                  breaches and hacks.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    className="btn btn-success demo-button"
                    href="https://calendly.com/myryze/demo"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="statitcs-one-section demo-statitcs-one-section">
          <h1 style={{ marginTop: "20px" }}>
            Our mission is protecting people, employers and employees from
            Cybercrime & Fraud
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-4 card-dark">
              {" "}
              <div className="card" style={{ padding: "10px" }}>
                <div className="demo-statitcs-one-section-text">
                  <h3 className="statitic-text">95%</h3>
                  <p className="statitic-p">
                    of corporate breaches involve a human element - including
                    social engineering, phising, and targeted attacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 card-dark">
              <div className="card" style={{ padding: "10px" }}>
                <div className="demo-statitcs-one-section-text">
                  <h3 className="statitic-text">82%</h3>
                  <p className="statitic-p">
                    customers will stay with the institution if they receive
                    proactive and realtime support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 card-dark">
              <div className="card" style={{ padding: "10px" }}>
                <div className="demo-statitcs-one-section-text">
                  <h3 className="statitic-text">$6B</h3>
                  <p className="statitic-p">
                    identity fraud is estimated to cost US businesses $6 billion
                    annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-section desktop-feature" id="features">
          <div className="row">
            <div className="col-sm-12 col-md-8 feature-section-text">
              Secure Your Business and Employees in the Digital Age with{" "}
              <span> Our Protection Services</span>
            </div>
            <div className="col-sm-12 col-md-4"></div>
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ul className="feature-list">
                <li>
                  Account-takeover (ATO) prevention for personal email and
                  social
                </li>
                <li>Deep & dark web threat detection for digital assets </li>
                <li>Privacy and protection from unauthorized access</li>
              </ul>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card"></div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card-two"></div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <ul className="feature-list">
                  <li>
                    Anti fraud/credit monitoring from all 3 Credit Bureaus
                  </li>
                  <li>Retroactive checkup to detect past identity theft</li>
                  <li>$1M identity theft insurance & 24/7 support</li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    className="btn btn-success demo-button"
                    href="https://calendly.com/myryze/demo"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ul className="feature-list">
                <li>Anti-malware defense & mobile threat detection</li>
                <li>Privacy-led security setting and configurations</li>
                <li>Location masking and safe-browsing (VPN)</li>
              </ul>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card-three"></div>
            </div>
          </div>
        </div>
        <div className="feature-section mobile-feature">
          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-sm-12 col-md-6 feature-section-text">
              Millitary Grade Digital Protection <span> In One Place</span>
            </div>
            <div className="col-sm-12 col-md-6"></div>
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card"></div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <ul className="feature-list">
                <li>
                  Account-takeover (ATO) prevention for personal email and
                  social media
                </li>
                <li>Deep & dark web threat detection for digital assets </li>
                <li>Privacy and protection from unauthorized access</li>
              </ul>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card-two"></div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <div>
                <ul className="feature-list">
                  <li>
                    Anti fraud/credit monitoring from all 3 Credit Bureaus
                  </li>
                  <li>Retroactive checkup to detect past identity theft</li>
                  <li>$1M identity theft insurance & 24/7 support</li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    className="btn btn-success demo-button"
                    href="https://calendly.com/myryze/demo"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="feature-img-card-three"></div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <ul className="feature-list">
                <li>Anti-malware defense & mobile threat detection</li>
                <li>Privacy-led security setting and configurations</li>
                <li>Location masking and safe-browsing (VPN)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="statitcs-two-section demo-partner">
          <div>
            <h1 style={{ marginBottom: "50px" }}>Partnering With RYZE</h1>
            <div className="statitcs-two-container ">
              <div className="row">
                <div className="col-xl-12 col-xxl-3 center">
                  <div className="card partnership-card ">
                    <div className="card-body ">
                      <div className="icon-container">
                        <span>
                          <i className="fas fa-eye"></i>
                        </span>
                      </div>
                      <h5 className="card-title demo-card-title">
                        Covering security blindspot
                      </h5>

                      <p className="card-text demo-card-text">
                        Ensuring security across a broader range in the era of
                        WFH/BYOD by safeguarding personal devices and accounts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-xxl-3 center">
                  <div className="card partnership-card">
                    <div className="card-body">
                      <div className="icon-container">
                        <span>
                          <i className="fas fa-handshake"></i>
                        </span>
                      </div>
                      <h5 className="card-title demo-card-title">
                        Covering security blindspot
                      </h5>

                      <p className="card-text demo-card-text">
                        Mitigating privacy concerns while promoting financial
                        wellness and providing education to employees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-xxl-3 center">
                  <div className="card partnership-card">
                    <div className="card-body">
                      <div className="icon-container">
                        <span>
                          <i className="fas fa-bolt"></i>
                        </span>
                      </div>
                      <h5 className="card-title demo-card-title">
                        Fast and easy onboarding
                      </h5>

                      <p className="card-text demo-card-text">
                        Getting started is as simple as downloading an app, and
                        your protection is assured within minutes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-xxl-3 center">
                  <div className="card partnership-card">
                    <div className="card-body">
                      <div className="icon-container">
                        <span>
                          <i className="fas fa-money-bill"></i>
                        </span>
                      </div>
                      <h5 className="card-title demo-card-title">
                        Drive Revenue <br />
                        <span>Together</span>
                      </h5>

                      <p className="card-text demo-card-text">
                        Take advantage of our partner program. Schedule your
                        demo today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo">
        <div id="video_overlays">
          <div className="container demo-container">
            <div className="wrapper-demo ">
              <div classname="partner-hero-section-text">
                <h1 className="demo-text">
                  Schedule <span>a demo</span> today
                </h1>
                <p className="demo-p">
                  RYZE protects your staff's personal accounts to prevent hacks
                  and breaches at the enterprise level. Reserve a complimentary
                  demonstration to discuss your organization's security.
                </p>
                <ul className="demo-list">
                  <li>
                    <span>
                      <i class="fas fa-check circle-icon"></i>
                    </span>
                    Hands-on onboarding with our cybersecurity experts.
                  </li>
                  <li>
                    <span>
                      <i class="fas fa-check circle-icon"></i>
                    </span>
                    Incident resolution support - always-on dedicated support
                    team.
                  </li>
                  <li>
                    <span>
                      <i class="fas fa-check circle-icon"></i>
                    </span>
                    Education & awareness - training materials and cybersecurity
                    trending fraud updates.
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <a
                    className="btn btn-success demo-button"
                    href="https://calendly.com/myryze/demo"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video className="videoTag" autoPlay loop muted>
          <source src={backgroundVid} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Partner;
