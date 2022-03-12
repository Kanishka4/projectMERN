import './productScreen.css';
import {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const ProductScreen = () => {
  const {id}=useParams();
  //console.log(id);
  const [qty,setQty]=useState(1);
  const dispatch=useDispatch();

  const productDetails=useSelector((state)=> state.getProductDetails);
  const {loading,error,product}=productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id,product]);

console.log(product);
const addToCartHandler = () => {
  dispatch(addToCart(product._id, qty));
};
  
  return (
    <div className='productScreen'> 
    
    <div className='productScreenLeft'>
      <div className="leftImage">
        <img src={product.imageUrl} alt={product.name}>
          </img>
      </div>
      <div className='leftInfo'>
        <p className='leftName'>{product.name}</p>
        <p>Price : ${product.price}</p>
        <p>{product.description}</p>
        </div>
    </div>
    <div className='productScreenRight'>
      <div className="rightInfo">
        <p>
          Price:<span>$ {product.price}</span>
        </p>
        <p>
          Status <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
        </p>
        <p>Qty:
        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
        </p>
        <p>
          <button type="button" onClick={addToCartHandler}><Link to='/cart'>Add To Cart</Link></button>
        </p>

      </div>
      </div>
    </div>
  )
}

export default ProductScreen