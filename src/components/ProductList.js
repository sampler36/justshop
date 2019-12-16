import React, { Component } from 'react';
import Product from './Product';
import Title from'./Title';
// import { storeProducts} from '../data';
import { ProductConsumer} from '../context';

export default class ProductList extends Component {
    // state={
    //     products: storeProducts
    // }
    render(){
        // console.log(this.state.products)
        return (
            <div>
                <React.Fragment>
                    <div className='py-5'>
                        <div className='container center'>
                            <Title name='Our' title='products' />
                            <div className='row'>
                             <ProductConsumer>
                                 {/* function to retun the value in the props */}
                                 {(value)=>{
                                     return value.products.map( product => {
                                         return <Product key={product.id} product={product} />
                                     })
                                 }}
                             </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                
            </div>
        )
    }
}