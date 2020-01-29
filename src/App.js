import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Bebas from './pages/Bebas';
import Home from './pages/Home';
import Login from './pages/Login';
import Mock from './pages/Mock';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
