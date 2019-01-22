import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';

import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <Routes history={history} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
