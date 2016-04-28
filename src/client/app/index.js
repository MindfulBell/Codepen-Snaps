import React, { Component } from 'react';
import { render } from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from '../public/css/style.scss';
import { Router, Route, browserHistory, hashHistory, indexRoute } from 'react-router';

import Layout from './routes/Layout'
import HomeAbout from './routes/Home-About'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import PortfolioPiece from './routes/Portfolio-Piece'


render((<Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <Route path='/home-about' component={HomeAbout}/>
            <Route path='/portfolio' component={Portfolio}>
              <Route path='/portfolio/:projectName' component={PortfolioPiece}/>
            </Route>
            <Route path='/contact' component={Contact}/>
          </Route>
        </Router>
  ), document.getElementById('app'));
