import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} /> 
                    <Route path="/Experience" element={<Experience />} />
                    <Route path="/Projects" element={<Projects />} />

                    {/* other routes */}
                </Routes>
            </Router>
        </>
    );
};

export default App;
