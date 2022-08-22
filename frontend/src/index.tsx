/* Core */
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Style */
import './assets/style/_main.scss';

/* Components */
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import ContactMe from "./pages/ContactMe";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/about-me' element={<AboutMe/>}/>
                    <Route path='/projects' element={<Project/>}/>
                    <Route path='/contact-me' element={<ContactMe/>}/>
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
)

