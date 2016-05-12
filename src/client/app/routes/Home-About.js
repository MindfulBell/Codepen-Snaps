import React, { Component } from 'react';
import ProgressBar from '../progress-bar';
import ContinueLink from '../continue-link';


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
    ['HTML/CSS', 37], 
    ['JavaScript', 49], 
    ['jQuery', 36], 
    ['React', 36], 
    ['Bootstrap', 34], 
    ['Git/GitHub', 37]
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
  	        	Born and raised in the Garden State, New Jersey, I studied English for my BA and Higher Education Counseling 
              for my MA. After moving out to the Bay Area and working in higher education for a few years, I am now seeking a new and exciting career. To that
              end, I have been self teaching web development for almost one year now and have come a long way in this time. It has been
              a tough task while holding down a demanding full time job in San Francisco, but rest assured, I feel I have gained junior level
              developer skills and can be a valuable assett in any development team. I primarily have used FreeCodeCamp, Udemy, tutorials, books, CodeMentor, and practice to get stronger at programming. 
  	        	</p>
          	</div>
          	<div id='profPic' className='aboutItem'>
          		<img className='img img-responsive'src='/src/client/public/css/Me.jpg'/>
          	</div>
          	<div id='rightPar' className='aboutPar aboutItem'>
  	        	<p>
  	        	I bring dedication
              and a keen eye for design to help bolster my front end skills. I am focusing on front-end for now as my skillset includes: JavaScript, jQuery,
               React w/redux, Bootstrap, CSS/SASS, and AJAX. I have every intention of learning the backend with Node, Mongo, and Express. I am an avid learner
               and I understand the ever changing, always growing nature of this field. I am ready to constantly grow and learn. When I am not programming, I enjoy
               hiking, videogames, board games, the beach, my cat, hanging with friends, and eating food. Please contact me if you want an awesome developer on your team! 
  	        	</p>
          	</div>
          </div>
          <div className='skillsSection'>
            <div id='skillsHeading'>
            		<h3 className='heading'>Skills</h3>
            </div>
            <div id='progress' className='about'>
            		{progressBars}
            </div>
          </div>
          <ContinueLink to='Portfolio' y={this.state.scrollPos} />
      </div>
    );
  }
  
}
