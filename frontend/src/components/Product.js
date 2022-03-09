import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='product'>
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="productName"/>
        <div className='productInfo'>
            <p className='infoName'></p>
            <p className='infoDescription'>
                Lorem ipsum
            </p>
            <p>
             $ 499  
            </p>
        </div>
        <Link  to={`/product/${1111}`} className='infoButton'>
            View
        </Link>
    </div>
  )
}

export default Product