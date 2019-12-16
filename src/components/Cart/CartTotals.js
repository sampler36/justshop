import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
  const { cartTax, cartTotal, cartSubTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-1 ml-sm-4 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
                <span className='text-blue'>Subtotal : £</span>{cartSubTotal}
            </h5>
            <h5>
                <span className='text-blue'>Vat : £</span>{cartTax}
            </h5>
            <h5>
                <span className='text-blue'>total : £</span>{cartTotal}
            </h5>
            <PayPalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
            
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
