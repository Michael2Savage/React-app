import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import { Switch, Route } from 'react-router-dom';
import axios, { Axios } from 'axios'
import Home from './view/Home';
import Shop from './view/Shop';

function App() {
  // const [variable, setfunction] = useState()



  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path = '/' render={()=><Home />}/>
          <Route exact path = '/shop' render={()=><Shop />}/>
        </Switch>
    </div>
  );
}

export default App;

