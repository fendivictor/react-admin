import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './pages/About';
import Item from './pages/Item';
import Login from './pages/Login';
import Webpage from './pages/Webpage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Webpage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/item" component={Item} />
    <Route exact path="/login" component={Login} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
