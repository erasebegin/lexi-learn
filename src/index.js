import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
ReactDOM.render(<Index />, document.getElementById('root'));
