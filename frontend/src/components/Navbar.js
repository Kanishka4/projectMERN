import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar=({click})=>{
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
    return(
        <nav className="navbar">

            {/**logo */}
            <div className="navbarLogo">
                <h2>Shopping Cart</h2>
            </div>

            {/**links */}
            <ul className="navbarLinks">
                <li>
                    <Link to="/cart" className='cartLink'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart

                        <span className='cartLogoBadge'>{getCartCount()}</span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                    
                </li>

            </ul>
            {/**hamburger menu */}
            <div className='hamburgerMenu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
};

export default Navbar;