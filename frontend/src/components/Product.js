import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({imageUrl,name,price,description,productId}) => {
  return (
    <div className='product'>
        <img src={imageUrl} alt={name}/>
        <div className='productInfo'>
            <p className='infoName'>{name}</p>
            <p className='infoDescription'>
                {description}
            </p>
            <p>
             $ {price} 
            </p>
        </div>
        <Link  to={`/products/${productId}`} className='infoButton'>
            View
        </Link>
    </div>
  )
}

export default Product