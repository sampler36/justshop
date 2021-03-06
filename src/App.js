import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import User from './components/User';
import Default from './components/Default';
import Modal from './components/Modal';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'component={ProductList}></Route>
        <Route path='/details'component={Details}></Route>
        <Route path='/cart'component={Cart}></Route>
        <Route path='/user'component={User}></Route>
        {/* <Route path='/store'component={Store}></Route> */}
        <Route component={Default}></Route>

      </Switch>
      <Modal /> 
    </React.Fragment>
    )
  }
}
