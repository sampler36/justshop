import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className='container-fluid'>
            {/* <h1 className='text-center text-blue'>Hello from Cart List</h1> */}
            {cart.map(item=>{
                return  <CartItem key={item.id} item={item} value={value} />;
            })}
    
        </div>
    )
}
