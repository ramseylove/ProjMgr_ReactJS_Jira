import React from "react";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">NavBar</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
