import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar=()=>{
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

                        <span className='cartLogoBadge'>0</span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                    
                </li>

            </ul>
            {/**hamburger menu */}
            <div className='hamburgerMenu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
};

export default Navbar;