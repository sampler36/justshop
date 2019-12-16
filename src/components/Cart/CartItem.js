import React from 'react';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center vertical-align-middle">
      <div className="col-10 mx-auto col-lg-2">
        {/* <h1 className='text-center text-blue'>This is a cart CartItem</h1> */}
        <img
          src={img}
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product :</span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price :</span> {price}
      </div>
      {/* the delete */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
                <span className='btn btn-black mx-1' onClick={() =>decrement(id)}>-</span>
                <span className='btn btn-count mx-1'>{count}</span>
                <span className='btn btn-plus mx-1' onClick={() =>increment(id)}>+</span>
            </div>
        </div>
      </div>
      {/* delete end   */}
      <div className="col-10 mx-auto col-lg-2">
       <div className='cart-icon' onClick={()=>removeItem(id)}>
       <i className='fas fa-trash' />
       </div>
      </div>
      {/* total  */}
      <div className="col-10 mx-auto col-lg-2">
        <span>
            item total : £{total}
            </span> 
      </div>

    </div>
  );
}
