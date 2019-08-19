// @flow

import React from 'react';
import Home from './routes/Home/Home';
import Events from './routes/Events/Events';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route 
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/events'
            component={Events}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
