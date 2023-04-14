import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary.jsx";
import Routing from './routing.jsx';
import './global.css';
import Home from "./pages/index.jsx";
import Privacy from "./pages/privacy.jsx";
import Terms from "./pages/terms.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/profile/edit" element={<Terms/>}/>
                </Routes>
            </HashRouter>
        </ErrorBoundary>
    </React.StrictMode>
)
