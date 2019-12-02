import React from "react";
import "./header.scss";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="max-width">
        <div className="header-flex-wrapper padd-lr-16">
          <div className="logo-wrapper inline">
            <img src={logo} className="logo" alt="Games Arena" />
          </div>
          <div className="header-link-wrapper inline">
            <ul>
              <li>
                <select>
                  <option>Tamil</option>
                </select>
              </li>
              <li>
                <select>
                  <option>Trailers</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
