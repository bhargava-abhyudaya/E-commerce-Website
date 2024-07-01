/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

export default function Phones({products}){
    return (


        <div className="-z-10 text-gray-600 bg-black body-font">
            <div className="-z-50"><img className="w-full" src="/Laptop cover.png" alt="sale"/></div>
  <div className="container mx-auto py-24">
    <div className="flex flex-wrap justify-between -mt-12 px-8">
    {products.map((product) =>{
      return <Link key={product._id} href={`/product/${product._id}`} className="rounded-2xl lg:w-[23%] md:w-[45%]  my-4 p-4 w-full bg-metal hover:cursor-pointer">
        <a className="block md:h-60 relative rounded overflow-hidden rounded-xl">
          <img alt="ecommerce" className="px-10 mx-auto object-cover object-center h-full w-full hover:cursor-pointer block" src={product.image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category} </h3>
          <h2 className="text-gray-900 title-font font-bold text-xl font-medium">{product.title}</h2>
          <p className="mt-1">₹{(product.price).toLocaleString()}</p>
        </div>
      </Link>
    })}
      
     
      
    </div>
    
  </div>
</div>

    )
}

export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI )
  }

  let products = await Product.find({category: "Tablets"})
  return{
    props:{
      products: JSON.parse(JSON.stringify(products))}
  }
   
}