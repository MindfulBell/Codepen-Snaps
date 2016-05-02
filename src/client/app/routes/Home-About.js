import React, { Component } from 'react';
import ProgressBar from '../progress-bar';


export default class HomeAbout extends Component {

  // React-parallax...hmmm

  render() {
  	const ProgressArr = [
    ['HTML/CSS', 37], 
    ['JavaScript', 53], 
    ['jQuery', 36], 
    ['React/Redux', 36], 
    ['Bootstrap', 34], 
    ['Git/GitHub', 34]
    ]
  	let progressBars = ProgressArr.map((skill,ind)=>{
  		return <ProgressBar key={ind} name={skill[0]} lvl={skill[1]}/>
  	})
    let bgImage='/portfolio-page/src/client/public/css/landing.jpg'

    /*<div id='landing' className='container-fluid'>
          <div id='title'>
            <h1>Tim Bell</h1>
            <h3>Junior Developer</h3>
          </div>
        </div>
        */
  	
    return (
      <div>
            <div id='landing' className='container-fluid'>
  	          <div id='title'>
  	            <h1>Tim Bell</h1>
  	            <h3>Junior Developer</h3>
  	          </div>
          	</div>
        
          	<div id='aboutTitle'>
          		<h3 className='heading'>Who</h3>
          </div>
          <div id='about' className='aboutSection'>
          	<div id='leftPar' className='aboutPar aboutItem'>
  	        	<p>
  	        	Bacon ipsum dolor amet cupim andouille biltong chuck. Chicken pancetta pork loin shoulder, 
  	        	drumstick kielbasa flank rump boudin cow. Prosciutto beef ribs pork belly brisket drumstick, 
  	        	alcatra bacon pork loin rump. Beef t-bone tenderloin, shankle andouille bresaola short ribs ribeye 
  	        	meatloaf pork prosciutto biltong. Shoulder ribeye strip steak tri-tip, picanha salami kielbasa. 
  	        	Filet mignon shank sausage, andouille fatback short ribs doner. Leberkas pig pastrami shankle strip 
  	        	steak chuck jerky landjaeger pork loin meatloaf biltong.
  	        	</p>
          	</div>
          	<div id='profPic' className='aboutItem'>
          		<img className='img img-responsive'src=''/>
          	</div>
          	<div id='rightPar' className='aboutPar aboutItem'>
  	        	<p>
  	        	Bacon ipsum dolor amet cupim andouille biltong chuck. Chicken pancetta pork loin shoulder, 
  	        	drumstick kielbasa flank rump boudin cow. Prosciutto beef ribs pork belly brisket drumstick, 
  	        	alcatra bacon pork loin rump. Beef t-bone tenderloin, shankle andouille bresaola short ribs ribeye 
  	        	meatloaf pork prosciutto biltong. Shoulder ribeye strip steak tri-tip, picanha salami kielbasa. 
  	        	Filet mignon shank sausage, andouille fatback short ribs doner. Leberkas pig pastrami shankle strip 
  	        	steak chuck jerky landjaeger pork loin meatloaf biltong.
  	        	</p>
          	</div>
          </div>
          <div id='skillsTitle'>
          		<h3 className='heading'>Skills</h3>
          </div>
          <div id='progress' className='aboutSection'>
          		{progressBars}
          </div>

      </div>
    );
  }
  
}
