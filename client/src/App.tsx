import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Share from './pages/Share';
import Posting from './pages/Posting';

const Register = React.lazy(() => import('./pages/Register'));
const Admin = React.lazy(() => import('./pages/admin/Admin'));
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/posting" component={Posting} />
        </React.Suspense>
      </Switch>
    </Router>
  );
}

export default App;
