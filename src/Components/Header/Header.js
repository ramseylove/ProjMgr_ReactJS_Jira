import React from 'react';

function Header(props) {
    return(
        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-sm-4">
                <h2>{props.title}</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <strong>{props.title}</strong>
                    </li>
                </ol>
            </div>
        </div>
)
}

export default Header;