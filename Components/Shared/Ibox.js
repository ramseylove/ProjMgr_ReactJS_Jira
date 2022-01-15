import React from 'react';

function Ibox (props) {
    const classes = 'ibox-content ' + props.className;
    return (
    <div className="wrapper wrapper-content animated fadeIn">
        <div className="row">
            <div className="col-lg-9">
                <div className="ibox">
                    <div className="ibox-title">
                        <h5>{props.title}</h5>
                    </div>
                    <div className={classes}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

export default Ibox;