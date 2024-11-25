import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import Routes from './routes';
var appElement = document.getElementById('scroller');


// Render Town
//
ReactDOM.render((
    <div>
        <Router>
            <Routes/>
        </Router>
    </div>
), appElement);
