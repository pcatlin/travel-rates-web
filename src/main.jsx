import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./ErrorBoundary.jsx";
import Routing from './routing.jsx';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Routing/>
        </ErrorBoundary>
    </React.StrictMode>,
)
