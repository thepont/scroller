import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import store from 'scroller/client/store';
import routes from 'scroller/client/routes';
import clientStyles from 'scroller/client/sass/styles.scss';

var appElement = document.getElementById('scroller');
var history = createBrowserHistory();

function renderDevtools() {
    if (process.env.NODE_ENV === 'development') {
        var Devtools = require('scroller/client/devtools');
        return <Devtools store={store} />;
    } 
}

//
// Render Town
//
ReactDOM.render((
    <div>
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>
        {renderDevtools()}
    </div>
), appElement);
