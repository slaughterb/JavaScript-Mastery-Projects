import React from 'react';
import ReactDOM from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <DarkModeContextProvider>
                <App />
            </DarkModeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
    document.getElementById('root')
);