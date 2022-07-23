/* Core */
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Style */
import './assets/style/_main.scss';

/* Components */
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
)

