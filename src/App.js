import React, { Fragment } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Bebas from './pages/Bebas';
import Home from './pages/Home';
import Login from './pages/Login';
import Mock from './pages/Mock';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const isLogin = true;
  // const isLogin = JSON.parse(localStorage.getItem('status'));
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        {isLogin ? (
          <Fragment>
            <Route exact path="/profile/">
              <Profile />
            </Route>

            <Route exact path="/mock/">
              <Mock />
            </Route>

            <Route exact path="/bebas/">
              <Bebas />
            </Route>
          </Fragment>
        ) : (
            <Redirect to="/login" />
          )}

      </Switch>
    </Router>
  );
}

export default App;
