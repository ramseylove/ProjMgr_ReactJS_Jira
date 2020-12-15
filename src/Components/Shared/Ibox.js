import React from 'react';

function Ibox (props) {

    return (
    <div className="wrapper wrapper-content animated fadeIn">
        <div className="row">
            <div className="col-lg-12">
                <div className="ibox">
                    
                        { props.title &&
                            <div className="ibox-title">
                            <h5>{props.title}</h5>
                            </div>
                        }
                    
                    <div className="ibox-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

export default Ibox;