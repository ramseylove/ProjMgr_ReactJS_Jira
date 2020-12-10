import React from 'react';

export default function NavItem (props) {
    return(
        <li>
            <a href='index.html'>
            <i className="fa fa-th-large"></i>
            <span className="nav-label">{props.name}</span>
            </a>
        </li>
    )
} 