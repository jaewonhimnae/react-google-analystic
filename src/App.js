import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import AppOnePage from './AppOne';
import AppTwoPage from './AppTwo';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-153234955-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <a href="/appOne" >AppOne</a>
          <br />
          <a href="/appTwo" >AppTwo</a>
          <br />
          <br />

          <Switch>
            <Route exact path="/appOne"  ><AppOnePage /> </Route>
            <Route exact path="/appTwo"  ><AppTwoPage /> </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
