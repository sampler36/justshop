import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
// import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>Items Added to the Cart</h5>
                      <img src={img} className="img-fluid" alt="products" />
                      <h4>{title}</h4>
                      <h5 className="text-muted">Price : £{price}</h5>
                      <div className="modal-footer">
                        <Link to='/'>
                        <button onClick={() => closeModal()} className="btn btn-primary">Continue </button>
                        </Link>
                        <Link to='/cart'>
                        <button onClick={() => closeModal()} className="btn btn-success">
                        <i className="fas fa-shopping-bag" />
                        </button>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
color:var(--lightBlue);
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
    padding:2rem;
}
`;
