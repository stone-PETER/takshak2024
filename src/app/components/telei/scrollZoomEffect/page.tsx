'use client'

import { useScroll, useTransform,motion } from "framer-motion";
import { useRef } from "react"

export default function ScrollZoom()
{
    const targetRef=useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], 
        
      });
      const scale = useTransform(scrollYProgress, [.50, .9], [1, 80]); 
      const opacity27th = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
      const background = useTransform(
        scrollYProgress,
        [0, .8],
        ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
      );
      const x = useTransform(scrollYProgress, [0, .7], ["100%", "-100%"]);
      const y = useTransform(scrollYProgress, [0.7, 1], ["0%", "-150%"]);
    return <motion.div ref={targetRef} style={{ background}} className="  relative h-[700dvh] pt-10" >
        <div className=" sticky top-1/2 ">
        <motion.div style={{ scale,x }}>
      <h1 className="text-center text-8xl font-bold  whitespace-nowrap text-black">Be there!!!</h1>
    </motion.div>
        </div>
        <div className=" sticky top-full flex justify-center items-center">
        <motion.div className=" text-6xl text-white p-[50px]" style={{ y,opacity:opacity27th }}>26,27&28th Sept!!</motion.div>
        </div>
       
   
  </motion.div>
}