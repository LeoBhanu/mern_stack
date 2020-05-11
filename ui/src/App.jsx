import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";

import Base from './components/Base'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Profile from './components/Profile'


function App() {
    return ( 
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component ={Base} />
                <div className="container">
                <Route exact path="/register" component ={Register} />
                <Route exact path="/login" component ={Login} />
                <Route exact path="/profile" component ={Profile} />
    
                </div>
            </div>
        </Router>
    );
} 

export default App;