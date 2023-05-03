import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "@fontsource/noto-sans";
import Home from "./pages/home.jsx";
import Privacy from "./pages/privacy.jsx";
import Links from "./pages/links.jsx";
import './global.pcss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/other-handy-apps" element={<Links/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
)
