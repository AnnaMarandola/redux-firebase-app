import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from '../src/components/dashboard/Dashboard';

import ProjectDetails from '../src/components/projects/ProjectDetails';
function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route  exact path='/' component={DashBoard} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
