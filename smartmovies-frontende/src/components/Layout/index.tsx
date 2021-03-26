import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container, Wrapper } from './styles';

import Header from '../Header';
import Title from '../Title';
import NavigationBar from '../NavigationBar';
import Content from '../Content';
import SingleContent from '../SingleContent';

const Layout: React.FC = () => {
  return (
    <Router>
      <Container>
        <Wrapper>
          <Header />
          <Route exact path='/' component={Title}/>
          <Route exact path='/series' component={Title}/>
          <NavigationBar />
          <Route exact path='/' component={Content}/>
          <Route exact path='/series' component={Content}/>
          <Route exact path="/inspectMovie/:contentId" component={SingleContent} />
          <Route exact path="/inspectSerie/:contentId" component={SingleContent} />
        </Wrapper>
      </Container>
    </Router>
  );
}

export default Layout;