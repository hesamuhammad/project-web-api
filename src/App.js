import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect,  } from 'react-router-dom';
import Header from './components/Header';
import Bebas from './pages/Bebas';
import Home from './pages/Home';
import Login from './pages/Login';
import Mock from './pages/Mock';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const isLogin = JSON.parse(localStorage.getItem('status'));
  return (
    <Router>
      <Header />

    </Router>
  );
}

export default App;
