import React, { Component } from 'react';
import ProgressBar from '../progress-bar';


export default class HomeAbout extends Component {

  render() {
  	const ProgressArr = [['HTML/CSS', 35], ['JavaScript', 51], ['jQuery', 35], ['React/Redux', 43], ['Bootstrap', 40], ['Git/GitHub', 30]]
  	let progressBars = ProgressArr.map((skill,ind)=>{
  		return <ProgressBar key={ind} name={skill[0]} lvl={skill[1]}/>
  	})
  	
    return (
      <div>     
        <div id='landing'>
	        <div id='title'>
	        	<h1>Tim Bell</h1>
	        	<h3>Junior Developer</h3>
	        </div>
        </div>
        <div id='aboutTitle'>
        		<h3 style={{width: '10%', margin: '0 auto', textAlign: 'center'}}>Who</h3>
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
        		<img className='img img-responsive'src='http://blog.on.com/wp-content/uploads/2014/01/profile-pic.jpg'/>
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
        		<h3 style={{width: '10%', margin: '0 auto', textAlign: 'center'}}>Skills</h3>
        </div>
        <div id='progress' className='aboutSection'>
        		{progressBars}
        </div>
        
      </div>
    );
  }
  
}
