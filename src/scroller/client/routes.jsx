import React from 'react';
import { Routes, Route } from "react-router-dom";

import AppHandler from './components/AppHandler';
import MainPage from './components/MainPage';
import StoryPage from './components/StoryPage'

var routes = (
    <Routes>
        <Route path="/" element={<AppHandler />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<StoryPage />} />
        </Route>
    </Routes>
)

module.exports = routes;
