import React from 'react';

function IboxSearch () {
    return (
        <div className="m-b-sm m-t-sm">
            <div className="input-group">
                <div className="input-group-prepend">
                    <button tabIndex="-1" className="btn btn-white btn-sm" type="button"><i className="fa fa-refresh"></i> Refresh</button>
                </div>
                <input type="text" className="form-control form-control-sm" />

                <div className="input-group-append">
                    <button tabIndex="-1" className="btn btn-primary btn-sm" type="button">Go!</button>
                </div>
            </div>
        </div>
    )
}

export default IboxSearch;