import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Apply from './Apply'
import GodChild from './GodChild';
import Supporter from './Supporter'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Apply} />
        <Route exact path='/godparent' component={Supporter} />
        <Route exact path='/godchild' component={GodChild} />
      </Switch>
    </Router>
  );
}

export default App;
