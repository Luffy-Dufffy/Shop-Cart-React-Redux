import React from 'react'
import { useSelector } from 'react-redux'
import CartTile from '../components/cartTile';

function Cart() {

    const cartItems = useSelector((state) => state.cart);
    return (
        <div className=''>
            <div className='flex justify-center flex-col mx-auto p-3'>
                {cartItems && cartItems.length ?
                    cartItems.map((product, index) => {
                        return (
                            <CartTile key={index} productData={product} />
                        );
                    }) :
                    <div>
                        <h1 className='text-center'>No products added to cart.</h1>
                    </div>
                }
            </div>

        </div>
    );
}

export default Cart