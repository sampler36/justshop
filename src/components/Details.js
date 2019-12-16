import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          //  console.log(value.detailProduct);
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* start title  */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info  */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4>model: {title}</h4>
                  <h6 className="text-title text-capitalize text-muted mt-3 mb-2">
                    Manufacturer:{' '}
                    <span className="text-uppercase">{company}</span>
                  </h6>
                  <h6 className="text-blue">
                    <strong>Price : £{price}</strong>
                  </h6>
                  <p className="font-weight-bold mt-3 mb-0">Product info:</p>
                  <p className="text-muted mt-3 mb-0">{info}</p>
                  {/* buttons  */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        <i className="fas fa-arrow-left"></i>
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        'inCart'
                      ) : (
                        <i className="fas fa-shopping-basket"></i>
                      )}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
