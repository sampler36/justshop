import React, { Component } from 'react';

export default class EmptyCart extends Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-10 mx-auto text-center">
              
          </div>
        </div>
        <h1 className="text-blue">Your Cart Is Empty</h1>
      </div>
    );
  }
}
