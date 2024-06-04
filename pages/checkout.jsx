import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Link from "next/link";

export default function cehckout({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
    return (
        <>
            <div className="py-8 text-center text-3xl font-bold">Checkout</div>
            <h1 className="px-6 my-2 text-xl">1. Please Enter your delivery details!!</h1>
            <div class="wrap flex sm:ml-0 mb-4 w-full md:ml-8" bis_skin_checked="1">
                <div className="w-3/7 wrap mx-4">
                    <label for="name" class="leading-7 text-sm text-white-600">First Name</label>
                    <input type="text" id="name" name="name" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="w-3/7 wrap mx-4">
                    <label for="name" class="leading-7 text-sm text-white-600">Last Name</label>
                    <input type="text" id="name" name="name" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
            </div>

            <div className="text-xl md:ml-12 mb-4 md:w-1/4 md:px-0">

                <label for="email" class="leading-7 text-sm text-white-600">Email</label>
                <input type="email" id="email" name="email" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div class="relative sm:w-3/4 md:ml-12 md:w-1/4 mb-4" bis_skin_checked="1">
                <label for="message" class="leading-7 text-sm text-gray-600">address</label>
                <textarea id="message" name="message" class="w-full block text-black bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>

            <div class="wrap flex sm:ml-0 mb-4 w-full md:ml-8" bis_skin_checked="1">
                <div className="w-3/7 wrap mx-4">
                    <label for="phone" class="leading-7 text-sm text-white-600">Phone</label>
                    <input type="number" id="phone" name="phone" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="w-3/7 wrap mx-4">
                    <label for="pincode" class="leading-7 text-sm text-white-600">Pincode</label>
                    <input type="number" id="pincode" name="pincode" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
            </div>

            <div class="wrap mb-6 flex sm:ml-0 mb-4 w-full md:ml-8">
                <div className="w-3/7 wrap mx-4">
                    <label for="city" class="leading-7 text-sm text-white-600">City</label>
                    <input type="text" id="city" name="city" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="w-3/7 wrap mx-4">
                    <label for="state" class="leading-7 text-sm text-white-600">State</label>
                    <input type="text" id="state" name="state" class="w-full text-black bg-white rounded-lg border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                </div>
            </div>
            <div className="mt-16 mb-8">
                <h1 className="px-6 my-2 text-xl">2. Review your cart items</h1>
                {subTotal == 0 && <h2 className="text-white text-xl ml-12 my-2">Cart is Empty!!! Add items to checkout</h2>}
                {

                    Object.keys(cart).map((k) => {
                        return (

                            <>

                                <ol className="list-decimal mx-16 mt-4">
                                    <li key={k} className="text-xl my-2"><div className="ml-2 item flex flex-wrap"><div className="w-1/4">{cart[k].name}</div><div className="flex flex-wrap ml-5"><FaCircleMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].color) }} className="hover:cursor-pointer mt-1 mx-2" />
                                        {cart[k].quantity} <FaCirclePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].color) }} className="mt-1 mx-2 hover:cursor-pointer" /> </div> </div></li>
                                </ol>
                                <div className="font-bold mx-16 text-2xl">
                                    Grand Total: ₹{subTotal.toLocaleString()}
                                </div>
                                <div className="text-center w-1/2">
                                    <Link href={'/payment'} ><button className="font-semibold text-xl m-4 h-16 w-60 bg-white text-black rounded-lg">Proceed to Payment</button></Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}