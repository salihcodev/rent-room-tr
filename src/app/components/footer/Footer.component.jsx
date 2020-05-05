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
    const { SocialMediaLinks, SiteMap } = value;

    return (
      <>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="footerWing copyrightsAndSocial">
                  {/* <emptyWrapper> just to manage my use flex */}
                  <div className="emptyWrapper">
                    <div className="social">
                      <ul>
                        {SocialMediaLinks.map((SLink) => {
                          return (
                            <li className="SLink" key={SLink.id}>
                              <Link to={SLink.link}>{SLink.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="copyrights">
                      <p className="copyText">
                        <span className="yearFlag">
                          {new Date().getFullYear()}
                        </span>
                        <span> all right reserved to</span>
                      </p>
                      <a href="https://www.twitter.com/salihcodev">
                        @ahmedsalih
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="footerWing footerLinks">
                  <ul className="siteMap">
                    {SiteMap.map((SLink) => (
                      <li className="sLink" key={SLink.id}>
                        <Link to={SLink.link}>{SLink.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
