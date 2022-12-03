import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <Link className="sidebar-toggle js-sidebar-toggle">
          <i className="hamburger align-self-center"></i>
        </Link>
        <h1>
          <b>Northwest College of Nursing Sciences</b>
        </h1>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
              <Link>
                <span className="text-dark">Charles Hall - 2001/5585222</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
