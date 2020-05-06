// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./Footer.component.style.scss";
class Footer extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const {
      SocialMediaLinks,
      Projects,
      Support,
      Company,
      companyExperience,
    } = value;

    return (
      <>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="socialMedia footerWing">
                  <h5 className="sectionTitle">social media</h5>
                  <div className="emptyWrapper">
                    <ul>
                      {SocialMediaLinks.map((SLink) => {
                        return (
                          <li className="SLink" key={SLink.id}>
                            <Link to={SLink.link}>{SLink.icon}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <div className="footerLinks footerWing">
                  <h5 className="sectionTitle">site map</h5>
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <ul className="siteMap">
                        <h6 className="colDescription">projects</h6>
                        {Projects.map((SLink) => (
                          <li className="sLink" key={SLink.id}>
                            <Link to={SLink.link}>{SLink.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <ul className="siteMap">
                        <h6 className="colDescription">support</h6>
                        {Support.map((SLink) => (
                          <li className="sLink" key={SLink.id}>
                            <Link to={SLink.link}>{SLink.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <ul className="siteMap">
                        <h6 className="colDescription">company</h6>
                        {Company.map((SLink) => (
                          <li className="sLink" key={SLink.id}>
                            <Link to={SLink.link}>{SLink.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <ul className="siteMap">
                        <h6 className="colDescription">co. experience</h6>
                        {companyExperience.map((SLink) => (
                          <li className="sLink" key={SLink.id}>
                            <Link to={SLink.link}>{SLink.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="downloadApp footerWing">
                  <h5 className="sectionTitle">download app</h5>
                  <p className="downloadDesc">
                    you can also get our applications on google play, app store!
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="emptyWrapper">
                        <div className="downBox androidBox"></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="emptyWrapper">
                        <div className="downBox iosBox"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="lastFooter">
              <div className="row">
                <div className="col">
                  <div className="policyAndPrivacy">
                    <p className="policy">
                      <a href="#">policy</a>
                      <a href="#">privacy</a>
                      <a href="#">cookies</a>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="copyrightsWrapper">
                    <p className="copyText">
                      <span className="copyrights">
                        @copyrights {new Date().getFullYear()}
                      </span>
                      <span>, all rights reserved to</span>
                      <a
                        className="author"
                        href="https://www.twitter.com/salihcodev"
                      >
                        @ahmedsalih
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
