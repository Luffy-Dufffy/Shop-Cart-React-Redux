import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductTile from '../components/productTile';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts() {
        try {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            if (data) {
                setLoading(false);
                setProducts(data);
            }
        } catch (error) {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchListOfProducts();
    }, []);

    return (
        <div className='w-full h-full bg-gray-100'>
            {loading ?
                <div className='min-h-screen w-full h-full flex justify-center items-center'>
                    <Circles
                        height={80}
                        width={80}
                        color='blue'
                        ariaLabel='loading'
                        visible={true}
                    />
                </div> :
                <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 max-w-6xl mx-auto p-3'>
                    {products && products.length ?
                        products.map((product, index) => {
                            return (
                                <ProductTile key={index} productData={product} />
                            );
                        }) :
                        <div>
                            <h1>No products found</h1>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Home