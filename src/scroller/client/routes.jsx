import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppHandler from 'scroller/client/components/AppHandler';
import ErrorHandler from 'scroller/client/components/ErrorHandler';
import MainPage from 'scroller/client/components/MainPage';
import StoryPage from 'scroller/client/components/StoryPage'

var routes = (
    <Route component={AppHandler} path="/">
        <IndexRoute component={MainPage} />
        <Route path="story/:id" component={StoryPage} />
    </Route>
);

module.exports = routes;
