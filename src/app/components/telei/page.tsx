'use client'
//import { image } from "framer-motion/client";
import HorizontalScroll from "./horizontalScroll/page";
import ScrollZoom from "./scrollZoomEffect/page";
import { Link } from "react-router-dom";
//import { url } from "inspector";

export default function Telei()
{
    return <section className=" overflow-x-clip overflow-y-clip relative z-50">
       <div className=" bg-black  flex flex-col items-center text-white p-5">
      
       <h1 className=" text-6xl font-semibold">Events</h1>
       {/* <h2>autoshow</h2> */}
       </div>
       <HorizontalScroll/>
       {/* <div className=" bg-slate-800 flex flex-col items-center text-white p-5">
       <h1 className=" text-6xl">happening in 3hrs 6min</h1>
       <h2>be there !!</h2>
       </div> */}
       
        
        <Link to="/events">
         <h1 className=" pb-5 px-5 text-4xl bg-black text-left text-slate-50">see More <span className=" text-gray-300 animate-pulse delay-200"> {">>>"}</span></h1></Link>
       <ScrollZoom/>
    </section>
}