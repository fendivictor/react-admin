import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './pages/About';
import Item from './pages/Item';

ReactDOM.render(
  <Router>
    <Route exact path="/" render={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/item" component={Item} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
