import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
import FiltersComponent from './containers/FiltersComponent';
import FilteredGnomes from './containers/FilteredGnomes';
import GnomeInfo from './components/GnomeInfo';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/filters" component={FiltersComponent} />
            <Route exact path="/filteredGnomes" component={FilteredGnomes} />
            <Route exact path="/gnome/:id" component={GnomeInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
