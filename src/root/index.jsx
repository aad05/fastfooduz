import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Body, Container } from './style';
import Sidebar from '../components/Sidebar';
export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Body>body</Body>
      </Container>
    </Router>
  );
};
export default Root;
