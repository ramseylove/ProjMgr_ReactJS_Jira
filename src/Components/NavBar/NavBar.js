import React from 'react';
import NavItem from './NavItem';

function NavBar () {
    
    return(
        <>
        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <li className="nav-header">NavBar</li>
                    <NavItem />
                </ul>
            </div>
        </nav>
    </>
    );
}

export default NavBar;