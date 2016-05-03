import React, { Component } from 'react';
import ProgressBar from '../progress-bar';


export default class HomeAbout extends Component {
  
  constructor(props){
    super(props);
    this.state={
      scrollPos: 0,
      isMounted: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount(){
    this.setState({isMounted: true})
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    this.setState({isMounted: false})
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    let y = window.pageYOffset;
    if (this.state.isMounted) {
      this.setState({scrollPos: y});
    }
  }
  
  render() {
  	const ProgressArr = [
    ['HTML/CSS', 42], 
    ['JavaScript', 58], 
    ['jQuery', 41], 
    ['React/Redux', 41], 
    ['Bootstrap', 39], 
    ['Git/GitHub', 36]
    ];
    
  	let progressBars = ProgressArr.map((skill,ind)=>{
  		return <ProgressBar scrollPos={this.state.scrollPos} key={ind} name={skill[0]} lvl={skill[1]}/>;
  	});
  	
    return (
      <div>
            <div id='landing' className='container-fluid'>
  	          <div id='title'>
  	            <h1 className='heading'>Tim Bell</h1>
  	            <h3>Junior Developer</h3>
  	          </div>
          	</div>

          	<div id='aboutTitle'>
          		<h3 className='heading'>Who</h3>
            </div>
          <div 
          id='bio' 
          className='about' 
          style={this.state.scrollPos < 400 ? {opacity: '0'} : {opacity: '1'}}>
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
          <div id='progress' className='about'>
          		{progressBars}
          </div>

      </div>
    );
  }
  
}
