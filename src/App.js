import React from 'react';

import './App.css';
import Dashboard from './Components/dashboard/dashboard';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';


function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Dashboard / >

        <
        Footer / >

        <
        /div>
    );
}

export default App