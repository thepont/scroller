import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppHandler from 'scroller/client/components/AppHandler';
import ErrorHandler from 'scroller/client/components/ErrorHandler';
import MainPage from 'scroller/client/components/MainPage';
import OtherPage from 'scroller/client/components/OtherPage';

var routes = (
    <Route component={AppHandler} path="/">
        <IndexRoute component={MainPage} />
        <Route path="other" component={OtherPage} />
        <Route path="*" component={ErrorHandler}/>
    </Route>
);

module.exports = routes;
