import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary.jsx";
import './global.css';
import Home from "./pages/index.jsx";
import Privacy from "./pages/privacy.jsx";
import Terms from "./pages/terms.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={Home}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/terms" element={Terms}/>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
)
