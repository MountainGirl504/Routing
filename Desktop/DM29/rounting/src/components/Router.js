import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Detail from './Detail';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />         
    <Route path='/about' component={ About } />
    <Route path='/products/:id' component={ Detail }/>
    <Route path='/products' component={ Products } />
  </Switch>
)