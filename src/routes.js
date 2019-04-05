import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard'

export default (
    <Switch>
      <Route component={ Dashboard } exact path="/" />
      <Route component={ Wizard } path="/wizard" />
    </Switch>
  )