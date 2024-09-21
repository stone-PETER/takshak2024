'use client'
import { motion,useTransform,useScroll } from "framer-motion"
import { useRef } from "react"
export default function HorizontalScroll()
{
    const targetRef=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
        target: targetRef,
    })
    
    const x=useTransform(scrollYProgress,[0,1],["1%","-80%"])
    const cardItems=[
        {
          img: "/images/Events/Ascension.jpg",
          title: "Ascension",
          text: "text 1",
        },
        {
            img: "/images/Events/TClash.jpg",
            title: "TClash",
            text: "text 3",
          },
        {
          img: "/images/Events/BGMI.jpg",
          title: "BGMI",
          text: "text 3",
        },
        {
          img: "/images/Events/Codomizer.jpg",
          title: "Codomizer",
          text: "text 4",
        },
        {
            img: "/images/Events/workshops/BotBuild.jpg",
            title: "Bot Build",
            text: "text 2",
          },
          {
            img: "/images/Events/workshops/BullBearsBrains.jpg",
            title: "Bulls Bears and Brains",
            text: "text 3",
          },
      ]
    return <section ref={targetRef} className=" relative h-[500vh] bg-slate-900">
<div className=" bg-black sticky top-0 h-screen flex items-center overflow-hidden">
    <motion.div  style={{ x,rotate:-.9 }} className=" flex gap-3">
        {cardItems.map((key,index)=><div key={index}>
            <div className="w-[50dvh] h-auto bg-white border-2 border-purple-800 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={key.img} alt="Card"/>
                <div className="p-4 text-center text-white">
                    {key.text}
                </div>
            </div>
        </div> )}
     
    </motion.div>
  
</div>
    </section>
}