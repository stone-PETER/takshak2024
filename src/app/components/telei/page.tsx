'use client'
import HorizontalScroll from "./horizontalScroll/page";
import ScrollZoom from "./scrollZoomEffect/page";

export default function Telei()
{
    return <section className=" overflow-x-clip overflow-y-clip">
       <div className=" bg-black  flex flex-col items-center text-white p-5">
      
       <h1 className=" text-6xl font-semibold">Telei 24</h1>
       <h2>autoshow</h2>
       </div>
       <HorizontalScroll/>
       {/* <div className=" bg-slate-800 flex flex-col items-center text-white p-5">
       <h1 className=" text-6xl">happening in 3hrs 6min</h1>
       <h2>be there !!</h2>
       </div> */}
       <ScrollZoom/>
    </section>
}