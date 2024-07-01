import { useRouter } from "next/router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mongoose from "mongoose";
import Product from "../../models/Product";



export default function Post({ buyNow, addToCart, product }) {
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState();
  const router = useRouter()
  const { slug } = router.query
  const updatePincode = (e) => {
    setPincode(e.target.value);
  }
  const checkPincode = async () => {
    const pincodes = await fetch("/api/pincodes");
    const data = await pincodes.json();
    if (data.includes(Number(pincode))) {
      setPincodeStatus(true);
      toast.success('We deliver to your address!!! ORDER NOW ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      
        });
    }
    else {
      setPincodeStatus(false);

    }
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img alt="ecommerce" className="px-24 rounded-xl lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-Neutralwhite-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-Neutralwhite-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-Neutralwhite-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-Neutralwhite-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-Neutralwhite-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div >
                <span className="mr-3">{product.color}</span>
              </div>

              </div>
              <div className="flex">
                <span className="w-2/5  title-font font-medium text-2xl text-gray-900">₹ {(product.price).toLocaleString()}</span>
                <button onClick={() => { addToCart(product.slug, 1, product.price, product.title, product.color) }} className="w-1/4 my-auto mx-auto justify-center text-center bg-Neutralwhite text-black flex mx-4 bg-Neutralwhite-500 border-0 py-2 focus:outline-none hover:bg-Neutralwhite-600 rounded">Add to cart </button>
                <button onClick={() => { buyNow(product.slug, 1, product.price, product.title, product.color) }} className="w-1/4 my-auto justify-center text-center bg-Neutralwhite text-black flex border-0 py-2 px-4 focus:outline-none hover:bg-Neutralwhite-600 rounded">Buy Now<IoIosCheckmarkCircle className="text-2xl ml-3 text-black" /> </button>
              </div>
              <div className="flex flex-wrap py-4">
                <input placeholder="Enter your pincode" className="w-35 rounded-lg py-1 px-4 border-black-500 text-black" onChange={updatePincode} type="text" />
                <button onClick={checkPincode} className="flex ml-4 text-base text-black bg-white rounded-lg border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded">Check</button>
              </div>
              {pincodeStatus && pincodeStatus != null && <p className="text-green">We deliver to your address!!! Order Now </p>}
              {pincodeStatus != null && !pincodeStatus && <p className="text-red">Sorry, we don&apos;t deliver to your address</p>}
              
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.findOne({ _id: context.params.slug })
  return {
    props: {
      product: JSON.parse(JSON.stringify(products))
    }
  }
}
