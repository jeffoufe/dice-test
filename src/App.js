import React from 'react';
import Home from './routes/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import './App.css';

const App = () => (
  <div className="App">
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
          component={() => <div>Coucou</div>}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
