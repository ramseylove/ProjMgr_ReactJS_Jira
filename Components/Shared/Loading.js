import React from 'react';
import Ibox from "./Ibox";

const Loading = (props) => {
    return (
        <>
        <Ibox className="sk-loading">
            <div className="sk-spinner sk-spinner-double-bounce">
                <div className="sk-double-bounce1"></div>
                <div className="sk-double-bounce2"></div>
            </div>
        </Ibox>
        </>
    )
}

export default Loading;