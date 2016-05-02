import React from 'react';

export default (props) => {
    const width = `${props.lvl}%`
    
    // setup diff colors for bars
    let backgroundColor = (function(lvl){
        if (lvl <=35) {
            return '#ffa64d'
        }
        else if (lvl >= 36 && lvl <= 49) {
            return '#ffff66'
        }
        else {
            return '#47d147'
        }
    }(props.lvl))

    return (
        <div>
            <h4 style={{display: 'inline'}}>{props.name}</h4>
            <div className="progress">
                <div className='progress-bar' role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style={{width, backgroundColor}}>
                </div>
            </div>
        </div>
    )
}

// Would LOVE to animate these bars
// if i want to do some jquery animation, where does the jquery file go??
// change color of the bars? 