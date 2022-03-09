import './homeScreen.css';
import Product from '../components/Product';

const homeScreen = () => {
  return (
    <div className='homeScreen'> 
      <h2 className='homeScreenTitle'>Latest Products</h2>

      <section className='homeScreenProducts'>
        <Product/>
        
        </section>
    </div>
  )
}

export default homeScreen;