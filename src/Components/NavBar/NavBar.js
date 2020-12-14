import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';

import { Nav } from 'react-bootstrap';
function NavBar () {
    
    return(
        <>
        <Nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <li className="nav-header">NavBar</li>
                    <li>
                        {/* <Link to={`${props.pathName}/`}> */}
                        <i className="fa fa-th-large"></i>
                        <span className="nav-label">Home</span>
                        <span className="fa arrow"></span>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </Nav>
    </>
    );
}

export default NavBar;