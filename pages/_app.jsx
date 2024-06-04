import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState,useEffect } from "react";


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  
  
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
    console.log("useEffect is working")
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
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
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
        <>
          <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} />
          <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} {...pageProps} />
          <Footer />
        </>
      );
      
    
  }