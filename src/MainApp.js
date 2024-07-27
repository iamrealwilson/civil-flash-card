import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import App from './App';
import Signout from './Signout';

const MainApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<App />} />
                <Route path="/index.html" element={<Signout />} />

              </Routes>
        </Router>
    );
};

export default MainApp;
