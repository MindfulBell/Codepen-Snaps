import React, { Component } from 'react';


export default (props) => {
    return (
        <div className='portfolioPiece ' style={{backgroundImage: `url(${props.imgSrc})`}}>  

            <div className='portHover'>
                <h3>{props.name}</h3>
                <a href={props.link} target='_blank'><i className="fa fa-television fa-3x" aria-hidden="true"></i></a>
                <a href={props.code} target='_blank'><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                <div className='tools container-fluid'>                  

                    <p>{props.skills}</p>
                </div>
            </div>                              
      </div>
    );
  
  
}

//style={{backgroundImage: `url(${temporarySrc})`}}