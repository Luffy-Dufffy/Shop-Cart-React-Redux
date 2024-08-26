import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice';

const cartTile = ({ productData }) => {

    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeFromCart(productData.id));
    }

    return (
        <div className='group flex items-center justify-around bg-white gap-5 px-4 py-2 h-24 w-[800px] mt-5 ml-5 rounded-lg'>
            <div className='h-full w-16'>
                <img src={productData.image} alt={productData.title} className='object-contain h-full w-full' />
            </div>
            <div className='flex flex-col justify-between gap-1 w-[50%]'>
                <h2 className='font-bold text-ellipsis line-clamp-1'>{productData.title}</h2>
                <p className='font-semibold text-gray-600'>Price: ${productData.price}</p>
            </div>
            <div className='flex justify-center gap-1 w-[30%]'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded text-sm">Buy Now</button>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded text-sm" onClick={handleRemoveCart}>Remove</button>
            </div>
        </div>
    );
}

export default cartTile