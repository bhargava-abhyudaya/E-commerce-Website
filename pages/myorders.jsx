import React from "react";
import mongoose from "mongoose";
import Order from "../models/Order";

export default function myorders() {
    return (
        <div className="bg-black flex text-center justify-center items-center">
            
            <div class="lg:w-4/5 mx-auto flex flex-col mb-5">
            <div className="font-semibold mb-3 text-xl"> 
                My Orders
                
            </div>
            <p className="mt-3 font-medium"> These are your past Orders</p>
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table
                                class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead
                                    class="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">#</th>
                                        <th scope="col" class="px-6 py-4">First</th>
                                        <th scope="col" class="px-6 py-4">Last</th>
                                        <th scope="col" class="px-6 py-4">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-neutral-200 dark:border-white/10">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                                    </tr>
                                    <tr class="border-b border-neutral-200 dark:border-white/10">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                        <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                        <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                    </tr>
                                    <tr class="border-b border-neutral-200 dark:border-white/10">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                        <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                        <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                        <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }
    let orders = await Order.find()
    return {
      props: {
        orders: (orders)
      }
    }
  }