import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Body, Container } from './style';
import Sidebar from '../components/Sidebar';
import { sidebar } from '../utils/sidebar';
import Notfound from '../components/Notfound';

export const Root = () => {
  return (
    <Router>
      <Container>
        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Sidebar} />
          ))}
        </Switch>

        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Component} />
          ))}
          <Route exact path='/'>
            <Redirect to='/buyurtmalar' />
          </Route>
          <Route path='*' component={Notfound} />
        </Switch>
      </Container>
    </Router>
  );
};
export default Root;
