import React from 'react';
import {HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import AppHandler from './components/AppHandler';
import MainPage from './components/MainPage';
import StoryPage from './components/StoryPage'

var appElement = document.getElementById('scroller');


// Render Town
//
createRoot(appElement).render(
    // <StoryPage/>
    <AppHandler>
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    {/* <Route index element={<MainPage />} /> */}
                    <Route path=":id" element={<StoryPage />} />
                </Route>
                <Route path="/story" element={<MainPage />}>
                    <Route path=":id" element={<StoryPage />} />
                </Route>
            </Routes>
        </HashRouter>
    </AppHandler>
);
