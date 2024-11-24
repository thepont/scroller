import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
var appElement = document.getElementById('scroller');

import Story from './components/Story'; 


//
// Render Town
//
ReactDOM.render((
    <div>
        <Router routes={routes}/>
    </div>
), appElement);
