import React from 'react';

function TabbedPanel (props) {
    return(
        <div className="row m-t-sm">
        <div className="col-lg-12">
            <div className="panel blank-panel">
                <div className="panel-heading">
                    <div className="panel-options">
                        <ul className="nav nav-tabs">
                            <li><a className="nav-link active" href="#tab-1" data-toggle="tab">Comments</a></li>
                            {props.tabTwo && <li><a className="nav-link" href="#tab-2" data-toggle="tab">{props.tabTwo}</a></li>}
                        </ul>
                    </div>
                </div>

                <div className="panel-body">
                    <div className="tab-content">
                        
                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TabbedPanel;