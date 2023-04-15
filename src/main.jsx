import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary.jsx";
import "@fontsource/noto-sans";
import './global.css';
import Home from "./pages/home.jsx";
import Privacy from "./pages/privacy.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/privacy-notice" element={<Privacy/>}/>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
)
