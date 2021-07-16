
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';
import DisplayColor from './components/displayColor';

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/:colorName/:colorCode" component={DisplayColor} />
          <Route exact path="/Add" component={Form} />
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
