import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState,useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import LoadingBar from "react-top-loading-bar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {

  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user,setUser] = useState({value:null})
  const [key,setKey] = useState(0)
  
  const showCart2 = () => {
    const cart2 = document.getElementById("cartMenu");
    if (cart2.classList.contains("collapse")) {
      cart2.classList.remove("collapse");
    }
  }
  const logout = () => {
    if (localStorage.getItem("token")){
      localStorage.removeItem("token");
      setUser({value:null})
      setKey(0)
      Router.push('/');
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
    router.events.on("routeChangeStart", () => {
      setProgress(30);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  
    const token = localStorage.getItem("token");
    if (token){
      setUser({value:token})
      setKey(1)
    }
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
  }, [router.query]);

 
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
          <Navbar logout={logout} user={user} key ={key} cart={cart} buyNow = {buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} />
          <LoadingBar color="#d1001f" waitingTime={400} height={4} progress={progress} onLoaderFinished={() => setProgress(0)} />  
          <Component cart={cart} buyNow = {buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} saveCart={saveCart} {...pageProps} />
          <Footer />
        </div>
      );
      
    
  }