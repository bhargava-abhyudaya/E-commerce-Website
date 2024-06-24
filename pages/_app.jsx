import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState,useEffect } from "react";
import React from "react";
import Router from "next/router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  
  const showCart2 = () => {
    const cart2 = document.getElementById("cartMenu");
    if (cart2.classList.contains("collapse")) {
      cart2.classList.remove("collapse");
    }
  }
  
  const buyNow = (itemCode ,quantity , price ,name,color) => {
    let newCart = {};
    saveCart(newCart);
    addToCart(itemCode,quantity,price,name,color);
    Router.push('/checkout');
  }

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let Total = 0
      let keys = Object.keys(cart)
    for (let i=0;i<keys.length;i++){
      
      Total = Total + (cart[keys[i]].price * cart[keys[i]].quantity);
    }
    setSubTotal(Total)
    
  }
  const calculateSubTotal = (cart) => {
    let Total = 0
    let keys = Object.keys(cart)
    for (let i=0;i<keys.length;i++){
      
      Total = Total + (cart[keys[i]].price * cart[keys[i]].quantity);
    }
    setSubTotal(Total)
  }

  useEffect(() => {
    try{
      if (localStorage.getItem("cart")) {
        calculateSubTotal(JSON.parse(localStorage.getItem("cart")))
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
     catch (error) {
      console.log(error);
      localStorage.removeItem("cart");
    }
  }, []);

  const addToCart = (itemCode ,quantity , price , name,color ) => {
    let newCart = cart
    if(itemCode in cart){
      newCart[itemCode].quantity=cart[itemCode].quantity + quantity
    }else{
      newCart[itemCode] = {quantity:1, price:price, name:name, color:color}
    }
    setCart(newCart)
    saveCart(newCart)
    showCart2()
    toast.success('Item added to cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
    toast.info('Cart Cleared Successfully!!!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }
  const removeFromCart = (itemCode,quantity,price,name,color) => {
    let newCart = cart
    if (itemCode in cart){
      newCart[itemCode].quantity =cart[itemCode].quantity - quantity
    }
    if(newCart[itemCode].quantity <= 0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
      return (
        <div>
          <Navbar cart={cart} buyNow = {buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} />
          <Component cart={cart} buyNow = {buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} {...pageProps} />
          <Footer />
        </div>
      );
      
    
  }