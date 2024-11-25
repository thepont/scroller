import React from 'react';
import { Switch, Route } from "react-router-dom";

import AppHandler from './components/AppHandler';
import MainPage from './components/MainPage';
import StoryPage from './components/StoryPage'

var routes = (
    <Switch>
        <Route path="/" element={<AppHandler />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<StoryPage />} />
        </Route>
    </Switch>
)

module.exports = routes;
