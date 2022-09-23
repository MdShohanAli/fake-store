import React, { useEffect, useState } from 'react';
import SingelProducts from '../SingelProducts/SingelProducts';
import './AllProduct.css'

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [products])
    console.log(products);
    return (

        <div className='container' >
            <div className='row'>
                <h1>All Product</h1>
                {products.map((pd) => (
                    <SingelProducts product={pd}> </SingelProducts>
                ))
                }
            </div>
        </div>
    );
};

export default AllProduct;