import React from "react";

export default function order({ cart, subTotal, clearCart }) {
    return (
        <div className="bg-black">
            <section className="sm:-mt-40 md:-mt-0 text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" bis_skin_checked="1">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Order id:#45054</h2>
                            <h1 className="text-green text-gray-900 text-3xl title-font font-medium mb-4">Order Placed successfully </h1>
                            <div className="flex mb-4 text-center" bis_skin_checked="1">
                                <a className="flex-grow text-indigo-500 border-indigo-500 py-2 text-lg px-1">Item NAME</a>
                                <a className="flex-grow border-gray-300 py-2 text-lg px-1">Quantity</a>
                                <a className="flex-grow border-gray-300 py-2 text-lg px-1">Price</a>
                            </div>
                            {Object.keys(cart).map((k) => {
                                return (
                                    <div keys className="flex border-t border-gray-200 py-2" bis_skin_checked="1">
                                        <span className="text-gray-500">{cart[k].name}</span>
                                        <span className="ml-auto text-gray-900">{cart[k].quantity}</span>
                                        <span className="ml-auto text-gray-900">₹ {cart[k].price.toLocaleString()}</span>
                                    </div>
                                )
                            }
                            )}
                            <div className="flex mt-4" bis_skin_checked="1">
                                <span className="title-font font-medium text-2xl text-gray-900">Grand Total : ₹  {subTotal.toLocaleString()}</span>
                                <button className="flex bg-white text-black ml-auto bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track order</button>



                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}