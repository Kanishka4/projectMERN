import './homeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {

  const dispatch =useDispatch();
  const getProducts=useSelector((state)=> state.getProducts);
  const {products,loading,error}=getProducts;

  useEffect(()=>{

    dispatch(listProducts());

  },[dispatch])
  return (
    <div className='homeScreen'> 
      <h2 className='homeScreenTitle'>Latest Products</h2>

      <section className='homeScreenProducts'>
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
        
        </section>
    </div>
  )
}

export default HomeScreen;