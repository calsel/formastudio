import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header/header";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Services/>
        <Projects/>
    </React.StrictMode>
);

