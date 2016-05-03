import React from 'react';

export default (props) => {
    const width = props.scrollPos < 850 ? 0 : `${props.lvl}%`;
    
    // setup diff colors for bars
    // let backgroundColor = (function(lvl){
    //     if (lvl <=35) {
    //         return '#85B846'
    //     }
    //     else if (lvl >= 36 && lvl <= 49) {
    //         return '#6EB846'
    //     }
    //     else {
    //         return '#33CC33'
    //     }
    // }(props.lvl))

    return (
        <div className='skillHolder'>
            <div style={{width: '15%', display: 'inline-block'}}>
                <h4>{props.name}</h4>
            </div>
            <div className='progressBar'>
                <div className='bar' style={{width}}>
                &nbsp;
                </div>
            </div>
        </div>
    )
}

// Would LOVE to animate these bars
// scroll event? So when scroll reaches bottom of page, animate these? Totally do-able