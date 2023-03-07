import React from 'react';
import './style.css';
import ryzeMethodology from '../../images/metho.png';
import formImage from '../../images/Download-app-visual-desktop.png';
import resourcesHero from '../../images/resources.svg';
import relax from '../../images/relax.svg'
import question from '../../images/question.svg'
import support from '../../images/support.svg'
function Resources() {
  return (
    <>
      <div className="container">
        <div className="resources-hero-section resources-hero-section-desktop-view">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div>
                <h1 className="resources-hero-section-h1">
                  You Can Count On Us <br />
                  <span className="resources-hero-section-span">
                    For Support
                  </span>
                </h1>
                <p className="resources-hero-section-p">
                  {' '}
                  With a subscription to Ryze, you can trust that
                  you're protected against cyber threats. Enjoy the
                  peace of mind that comes with our team of
                  cybersecurity experts protecting you with on-demand
                  24/7 support and $1M in identity theft insurance
                  protection.
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
            <div
              className="col-md-12 col-lg-6"
              // style={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   backgroundColor:'red'
              // }}
            >
              <div className="resources-hero-img">
              {/* <img
                  src={resourcesHero}
                  alt="resources herosection"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="resources-hero-section-mobile-view">
          <div className="row ">
            <div className="col-12">
              <div className="resources-hero-img-mobile center">
                <img
                  src={resourcesHero}
                  alt="resources herosection"
                />
              </div>
            </div>
            <div className="col-12">
              <div>
                <h1 className="resources-hero-section-h1">
                  You Can Count On Us <br />
                  <span className="resources-hero-section-span">
                    For Support
                  </span>
                </h1>
                <p className="resources-hero-section-p">
                  {' '}
                  With a subscription to Ryze, you can trust that
                  you're protected against cyber threats. Enjoy the
                  peace of mind that comes with our team of
                  cybersecurity experts protecting you with on-demand
                  24/7 support and $1M in identity theft insurance
                  protection.
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
          </div>
        </div>
        <div className="statitcs-two-section">
          <div>
            <h1>Ryze Memership Includes</h1>
            <div className="statitcs-two-container">
              <div className="row">
                <div className="col-md-12 col-lg-4 center">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <div className="icon-container">
                        <span>
                          <i className="fa fa-shield"></i>
                        </span>
                      </div>
                      <h5 className="card-title resources-card-title">
                        Real-time fraud scanning & alerts
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 center">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <div className="icon-container">
                        <div className="icon-container">
                          <span>
                            <i className="fa fa-headset"></i>
                          </span>
                        </div>
                      </div>
                      <h5 className="card-title resources-card-title">
                        24/7/365 support to keep you safe
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 center">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <div className="icon-container">
                        <span>
                          <i className="fas fa-credit-card"></i>
                        </span>
                      </div>
                      <h5 className="card-title resources-card-title">
                        3 Bureau credit monitoring
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="methodology resources-methodology">
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
        <div className="resources-main-desktop">
          <div className="resources-main">
            <div className="row resources-main-row ">
              <div className="col-md-12 col-lg-6 resources-main-img-container">
                <div>
                  <h1 className="resources-main-h1">
                    $1M identity theft insurance
                  </h1>
                  <p className="resources-main-p">
                    {' '}
                    Your subscription comes with a $1 million
                    insurance policy that covers expenses such as lost
                    wages, legal fees, transportation, and other costs
                    resulting from fraud, forgery, data breaches, and
                    identity theft incidents.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 resources-main-img-container">
                <div className="resources-main-img-one"></div>
              </div>
            </div>
            <div className="row resources-main-row">
              <div className="col-md-12 col-lg-6 resources-main-img-container">
                <div className="resources-main-img-two"></div>
              </div>
              <div className="col-md-12 col-lg-6 resources-main-img-container">
                <div>
                  <h1 className="resources-main-h1">
                    Cybersecurity experts support team
                  </h1>
                  <p className="resources-main-p">
                    Our dedicated support team is available 24/7 to
                    assist you with any financial or identity theft
                    concerns. They will guide you through the entire
                    process from the initial alert to the final
                    resolution, providing personalized assistance
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="row resources-main-row">
              <div className="col-md-12 col-lg-6 resources-main-img-container">
                <div>
                  <h1 className="resources-main-h1">Scam assist</h1>
                  <p className="resources-main-p">
                    If you come across any links or files that seem
                    suspicious, feel free to share them with us. Our
                    team will evaluate the potential threat and
                    provide guidance on how to address the issue.
                  </p>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 resources-main-img-container"
              >
                <div className="resources-main-img-three"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="resources-main-mobile">
          <div className="row ">
            <div className="col-12 resources-main-mobile-img-container">
            <img src={relax} alt="relax" />
            </div>
            <div className="col-12">
            <h1 className="resources-main-h1">
                    $1M identity theft insurance
                  </h1>
                  <p className="resources-main-p">
                    Your subscription comes with a $1 million
                    insurance policy that covers expenses such as lost
                    wages, legal fees, transportation, and other costs
                    resulting from fraud, forgery, data breaches, and
                    identity theft incidents.
                  </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 resources-main-mobile-img-container">
            <img src={support} alt="support" />
            </div>
            <div className="col-12">
            <h1 className="resources-main-h1">
                    Cybersecurity experts support team
                  </h1>
                  <p className="resources-main-p">
                    Our dedicated support team is available 24/7 to
                    assist you with any financial or identity theft
                    concerns. They will guide you through the entire
                    process from the initial alert to the final
                    resolution, providing personalized assistance
                    every step of the way.
                  </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 resources-main-mobile-img-container">
              <img src={question} alt="question" />
            </div>
            <div className="col-12">
            <h1 className="resources-main-h1">Scam assist</h1>
                  <p className="resources-main-p">
                    If you come across any links or files that seem
                    suspicious, feel free to share them with us. Our
                    team will evaluate the potential threat and
                    provide guidance on how to address the issue.
                  </p>
            </div>
          </div>
        </div>

        <div className="contact-section" >
          <div className=" container">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-sm-12 col-md-6 form-container">
                <div style={{ width: '100%' }}>
                  <h1>CONTACT US</h1>
                  <div>
                    <form
                    action="mailto:support@myryze.com"
                    method="POST"
                    enctype="multipart/form-data"
                    name="EmailForm">
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
    </>
  );
}
export default Resources;
