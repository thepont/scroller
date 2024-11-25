import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import ScrollerRoutes from './routes';
var appElement = document.getElementById('scroller');


// Render Town
//
ReactDOM.createRoot(appElement).render(
    <div>
        <BrowserRouter>
            <ScrollerRoutes/>
        </BrowserRouter>
    </div>
);
