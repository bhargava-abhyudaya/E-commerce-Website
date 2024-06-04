import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";
import { MdSwapVerticalCircle } from "react-icons/md";


export default function Navbar({cart, addToCart, removeFromCart, clearCart, subTotal}) {
  const showCart = () => {
    let cart = document.querySelector('#cartMenu') ;
    cart.classList.toggle('collapse');
    
  }
  return (
    <header className="text-gray-600 body-font md:top-0 sticky top-0 z-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black w-full">
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 hover:cursor-pointer mb-4 mb-0">
      <Image src="/image.png" alt="logo" width={40} height={40} />
      <span className="ml-3 text-xl">Abhyudaya</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={'/Laptops'} className="mr-5 hover:text-gray-900 hover:cursor-pointer">Laptops</Link>
      <Link href={'/Phones'} className="mr-5 hover:text-gray-900 hover:cursor-pointer">Phones</Link>
      <Link href={'/Tabs'} className="mr-5 hover:text-gray-900 hover:cursor-pointer">Tablets</Link>
      <Link href={'/about'} className="mr-5 hover:text-gray-900 hover:cursor-pointer">About</Link>
    </nav>
    <button onClick={showCart} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart <FaShoppingCart className="text-2xl mx-4" />
    
    </button>
   
  </div>
  <div id="cartMenu" className="absolute rounded-xl py-8 collapse p-5 text-black top-30 right-0 w-80 bg-white h-[100vh]">
    <h2 className="text-center text-2xl font-bold text-black">Shopping Cart</h2> 
    {
        Object.keys(cart).length === 0 ? <h2 className="text-xl my-2">Cart is Empty</h2> : null
      }
    
    <IoCloseCircle onClick={showCart} className="text-2xl absolute top-2 right-2 hover:cursor-pointer" />
    <ol className="list-decimal ml-5 mt-4">
      {/* <li className="text-xl my-2"><div className="ml-2 item flex flex-wrap"><div className="w-2/4">Laptop</div><div className="flex flex-wrap ml-5"><FaCircleMinus className="hover:cursor-pointer mt-1 mx-2"/> 1 <FaCirclePlus className="mt-1 mx-2 hover:cursor-pointer"/> </div> </div></li> */}
      
      {
        Object.keys(cart).map((k) => {
          return (
            <li key={k} className="text-xl my-2"><div className="ml-2 item flex flex-wrap"><div className="w-2/4">{cart[k].name}</div><div className="flex flex-wrap ml-5"><FaCircleMinus onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].color)}} className="hover:cursor-pointer mt-1 mx-2"/>
            {cart[k].quantity} <FaCirclePlus onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].color) }}  className="mt-1 mx-2 hover:cursor-pointer"/> </div> </div></li>
          )
        })
      }
    </ol>
    <div className="font-bold text-center text-2xl">
      Grand Total: ₹{subTotal.toLocaleString()}
    </div>
    <div className="flex text-center justify-center">
      {subTotal>0 && <button onClick={clearCart} className="text-center w-1/3 bg-black text-white p-3 m-3 rounded-lg">Clear Cart</button>}
      {subTotal>0 && <Link href={'/checkout'} className="text-center w-1/3 bg-black text-white p-3 m-3 rounded-lg"><button >CheckOut</button>
      </Link>}
      
    </div>
    
</div>
</header>
  );
}