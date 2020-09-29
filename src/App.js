import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Switch>
      <div className="App">
        <Navigation />
        <Route
          path="/"
          render={(props) => <Welcome {...props} name="DaVinci0137" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
      </div>
    </Switch>
  );
}

export default App;
