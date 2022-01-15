import React from 'react';

function ProgressBar (percentage) {

    const makePercentage(percentage){
        if (percentage === Number)
        return `{percentage}%`
    }

    return (
        <div className="progress progress-striped active m-b-sm">
            <div style="width: {{makePercentage(percentage)}}" className="progress-bar"></div>
        </div>
    )
}

export default ProgressBar;