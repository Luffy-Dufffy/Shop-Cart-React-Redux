import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className=''>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <Link to={'/'}>
                    <div className='ml-5'>
                        <h1 className='text-blue-600 font-bold text-md sm:text-xl md:text-2xl cursor-pointer tracking-wider'>SHOPPING CART</h1>
                    </div>
                </Link>
                <ul className='flex list-none items-center space-x-6 text-gray-800 font-semibold text-lg'>
                    <Link to={'/'}>
                        <li className='cursor-pointer '>Home</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className='cursor-pointer '>Cart</li>
                    </Link>
                </ul>
            </nav>
            <hr  className='w-full h-1 bg-zinc-300'/>
        </div>
    );
}

export default Header