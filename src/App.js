import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Bebas from './pages/Bebas';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Mock from './pages/Mock'
// import Copyright from './components/Copyright';

function App() {
  const isLogin = JSON.parse(localStorage.getItem("status"));
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mock">
          <Mock />
        </Route>

        {/* jika sudah login */}
        {isLogin ? (
          <Fragment>
            <Route exact path="/profile">
              <Profile />
            </Route>


            <Route exact path="/bebas">
              <Bebas />
            </Route>
          </Fragment>
        ) : (
            <Fragment>
              {/* // jika belum login */}
              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="/registration">
                <Register />
              </Route>
            </Fragment>
          )}

      </Switch>
      {/* <Copyright/> */}
    </Router>
  );
}

export default App;

