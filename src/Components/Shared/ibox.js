import React from 'react';

export function Ibox (title, heading, content) {

    return (
        <div className="ibox">
            <div className="ibox-title">
                <h5>{title}</h5>
            </div>
            <div className="ibox-content">
                    {content}
            </div>
        </div>
    )}