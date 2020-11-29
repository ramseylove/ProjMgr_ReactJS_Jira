import React from 'react';

function Ibox (props) {

    return (
        <div className="ibox">
            <div className="ibox-title">
                <h5>{props.title}</h5>
            </div>
            <div className="ibox-content">
            {props.children}
            </div>
        </div>
    )}

export default Ibox;