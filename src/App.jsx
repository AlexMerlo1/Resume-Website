import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/HomePage';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*
                    <Route path="/AboutMe" element={<AboutMe />} /> 
                    <Route path="/Experience" element={<Experience />} />
                    <Route path="/MainDashboard" element={<Projects />} />
                    */}

                    {/* other routes */}
                </Routes>
            </Router>
        </>
    );
};

export default App;
