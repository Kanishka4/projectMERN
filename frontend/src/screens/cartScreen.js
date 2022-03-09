import './cartScreen.css';
import CartItem from '../components/CartItem';

const cartScreen = () => {
  return (
    <div className='cartScreen'>
      <div className='cartScreenLeft'>
          <h2>
            Shopping Cart
            <CartItem/>
          </h2>
      </div>
      <div className='cartScreenRight'>
        <div className='cartScreenInfo'>
        <p> Subtotal (0) items </p>
        <p>$499</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
        </div>
      </div>
  )
}

export default cartScreen