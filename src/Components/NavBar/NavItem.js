import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem (props) {
    return(
        <li>
            <Link to={`${props.pathName}/`}>
            <i className="fa fa-th-large"></i>
            <span className="nav-label">{props.name}</span>
            </Link>
        </li>
    )
} 