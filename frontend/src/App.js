import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import ProductScreen from './screens/productScreen';
import Navbar from './components/Navbar';
import BackDrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle,setSideToggle]=useState(false);
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Routes >
          <Route  path="/" element={<HomeScreen/>}/> 
          <Route path="/products/:id" element={<ProductScreen />}/>
          <Route path="/cart" element={<CartScreen/>}/>

          
        </Routes>
      </main>
      </Router>
    
  );
}

export default App;
