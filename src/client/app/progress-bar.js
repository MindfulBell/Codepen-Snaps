import React from 'react';

export default (props) => {
    const width = props.scrollPos < 1250 ? 0 : `${props.lvl}%`;

    return (
        <div className='skillHolder'>
            <div className='skillTitle'>
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
