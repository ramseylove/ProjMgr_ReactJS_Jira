import React from 'react';

export default function NavItem () {
    return(
        <li>
            <a href='index.html'>
            <i className="fa fa-th-large"></i>
            <span className="nav-label">{this.props.children}</span>
            </a>
        </li>
    )
} 