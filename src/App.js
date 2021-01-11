import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from "./containers/Register";

import { isUserLoggedIn } from './actions';

import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
