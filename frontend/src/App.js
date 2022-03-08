
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import ProductScreen from './screens/productScreen';
import Navbar from './components/Navbar';
import BackDrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  return (
    <Router>
      <Navbar/>
      <SideDrawer/>
      <BackDrop/>
      <main>
        <Routes>
          <Route  path="/" element={<HomeScreen/>}/> 
          <Route path="/product/:id" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>

          
        </Routes>
      </main>
      </Router>
    
  );
}

export default App;
