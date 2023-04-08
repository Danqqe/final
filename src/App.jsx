import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import Main from './Components/Main/slider';
import AllCards from './Components/Main/AllCards';
import SideCart from './Components/Cart/SideCart';
import { Route,Routes } from 'react-router-dom';
import Zakladki from './Components/Header/Zakladki'
import Profile from './Components/Header/Profile';


function App(){
  const[openCart,setOpenCart]=useState(false);
  const [cart,setCart]=useState([])
  const[favor,setFavor]=useState([])
  function addToFav(newFav){
    let alreadyAdded1 = false
    for (let b = 0; b < favor.length; b++) {
      if (favor[b]['id'] === newFav.id) {
          alreadyAdded1 = true
      }
    }
    if (!alreadyAdded1) {
      setFavor(prev => [...prev, newFav])
  }
  else {
      setFavor(favor.filter(p => p.id !== newFav.id));
  }

  }
  function addProdToCart(newProd){
    
    let alreadyAdded = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]['id'] === newProd.id) {
          alreadyAdded = true
      }
    }
    if (!alreadyAdded) {
      setCart(prev => [...prev, newProd])
    } 
    else {
      setCart(cart.filter(p => p.id !== newProd.id));
    }

    
  }

  return<>
  <SideCart openCart={openCart} onOpenCart={() =>setOpenCart(false)} cart={cart}/>
  <Header onCloseCart={() =>setOpenCart(true)} cart={cart} />

  <Routes>
    <Route path='/' element={<><Main addProdToCart={(newProd) => addProdToCart(newProd)} addToFav={(newFav)=> addToFav(newFav)} /><AllCards  addProdToCart={(newProd) => addProdToCart(newProd)} addToFav={(newFav)=> addToFav(newFav)}/></>}></Route>
    <Route path='/zakladki' element={<Zakladki favor={favor}/>}/>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  
  
    </>
  ;

}

export default App;
