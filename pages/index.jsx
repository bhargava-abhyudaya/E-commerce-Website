import { Inter } from "next/font/google";
import { TbTruckReturn } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";



export default function Home() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full" src="/cover.png" alt="cover" />
      <section className="text-gray-500 body-font" >
  <div className="container px-5 py-24 mx-auto" >
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Why buy from us?</h1>
      <br className="hidden sm:block" />
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6" >
      <div className="p-4 md:w-1/3 flex" >
        {/* <div  className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0" >
          <div><TbTruckReturn/></div>
        </div> */}
        <TbTruckReturn className="text-4xl"/>
        <div className="flex-grow pl-6" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Qucik and Easy returns</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex" >
        {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0" >
          <FaShippingFast />
        </div> */}
        <FaShippingFast className="text-4xl" />
        <div className="flex-grow pl-6" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Express and Free delivery</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex" >
        {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0" >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div> */}
        <MdOutlineSupportAgent className="text-4xl" />
        <div className="flex-grow pl-6" >
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">24*7 support helpline</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
      
      
  )
}
