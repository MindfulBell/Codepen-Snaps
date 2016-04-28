import React, { Component } from 'react';


export default class HomeAbout extends Component {

  render() {
    return (
      <div>     
        <div id='landing'>
	        <div id='title'>
	        	<h1>Tim Bell</h1>
	        	<h3>Junior Developer</h3>
	        </div>
        </div>
        <div id='about' className='container'>
        	<div id='aboutTitle'>
        		<h3>Who</h3>
        	</div>
        	<div id='leftPar' className='aboutPar container-fluid'>
	        	<p>
	        	Bacon ipsum dolor amet cupim andouille biltong chuck. Chicken pancetta pork loin shoulder, 
	        	drumstick kielbasa flank rump boudin cow. Prosciutto beef ribs pork belly brisket drumstick, 
	        	alcatra bacon pork loin rump. Beef t-bone tenderloin, shankle andouille bresaola short ribs ribeye 
	        	meatloaf pork prosciutto biltong. Shoulder ribeye strip steak tri-tip, picanha salami kielbasa. 
	        	Filet mignon shank sausage, andouille fatback short ribs doner. Leberkas pig pastrami shankle strip 
	        	steak chuck jerky landjaeger pork loin meatloaf biltong.
	        	</p>
        	</div>
        	<div id='rightPar' className='aboutPar'>
	        	<p>
	        	Bacon ipsum dolor amet cupim andouille biltong chuck. Chicken pancetta pork loin shoulder, 
	        	drumstick kielbasa flank rump boudin cow. Prosciutto beef ribs pork belly brisket drumstick, 
	        	alcatra bacon pork loin rump. Beef t-bone tenderloin, shankle andouille bresaola short ribs ribeye 
	        	meatloaf pork prosciutto biltong. Shoulder ribeye strip steak tri-tip, picanha salami kielbasa. 
	        	Filet mignon shank sausage, andouille fatback short ribs doner. Leberkas pig pastrami shankle strip 
	        	steak chuck jerky landjaeger pork loin meatloaf biltong.
	        	</p>
        	</div>
        	<div id='profPic'>
        		<img className='img img-responsive'src='http://blog.on.com/wp-content/uploads/2014/01/profile-pic.jpg'/>
        	</div>
        	
        </div>
        <div id='progress'>

        </div>
      </div>
    );
  }
  
}