import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppHandler from 'scroller/client/components/AppHandler';
import ErrorHandler from 'scroller/client/components/ErrorHandler';
import MainPage from 'scroller/client/components/MainPage';

var routes = (
    <Route component={AppHandler} path="/">
        <IndexRoute component={MainPage} />
    </Route>
);

module.exports = routes;
