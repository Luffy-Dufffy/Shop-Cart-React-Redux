import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';

const ProductTile = ({ productData }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const [addedToCart, setAddedToCart] = useState(cartItems.some(item => item.id === productData.id));

    const handleAddToCart = () => {
        setAddedToCart(true);
        dispatch(addToCart(productData));
    }
    const handleRemoveCart = () => {
        console.log("remove");
        setAddedToCart(false);
        dispatch(removeFromCart(productData.id));
    }
    return (
        <div>
            <div className='group flex flex-col justify-center bg-white gap-5 p-4 h-[420px] mt-10 ml-5 rounded-lg hover:-translate-y-1 transition-all duration-50'>
                <div className='h-[180px]'>
                    <img src={productData.image} alt={productData.title} className='object-contain h-full w-full' />
                </div>
                <div className='flex flex-col justify-between gap-1'>
                    <h2 className='font-bold text-ellipsis line-clamp-1'>{productData.title}</h2>
                    <p className='text-ellipsis line-clamp-2'>{productData.description}</p>
                    <p className='font-semibold'>Price: ${productData.price}</p>
                </div>
                <div className='flex justify-between gap-1'>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Buy Now</button>
                    <button className={`font-bold py-2 px-4 rounded w-full ${addedToCart ? 'border-2 border-blue-500 text-black' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                        onClick={addedToCart ? handleRemoveCart : handleAddToCart}
                    >
                        {
                            addedToCart
                                ? 'Remove cart'
                                : 'Add to cart'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductTile