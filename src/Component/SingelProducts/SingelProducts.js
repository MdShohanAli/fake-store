import React from 'react';
import './SingelProducts.css'

const SingelProducts = (props) => {
    console.log(props.product)
    return (

        <div className="col-lg-4">
            <div className="card p-3 m-1 border">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <h1>{props.product.title.slice(0, 10)}</h1>

                <div className='d-flex justify-content-around' >
                    <button className='btn btn-success'> Add To Cart </button>
                    <button className='btn btn-danger'> delete </button>
                    <button className='btn btn-info'> details </button>

                </div>
            </div>
        </div>

    );
};

export default SingelProducts;