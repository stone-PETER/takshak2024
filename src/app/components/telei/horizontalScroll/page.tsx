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
            img:'/images/man.png',
            text:'text 1'
        },
        {
            img:'/images/man.png',
            text:'text 2'
        },
        {
            img:'/images/man.png',
            text:'text 3'
        },
        {
            img:'/images/man.png',
            text:'text 4'
        },
        {
            img:'/images/man.png',
            text:'text 5'
        },
        {
            img:'/images/man.png',
            text:'text 6'
        },
    ]
    return <section ref={targetRef} className=" relative h-[500vh] bg-slate-900">
<div className=" bg-black sticky top-0 h-screen flex items-center overflow-hidden">
    <motion.div  style={{ x,rotate:-.7 }} className=" flex gap-3">
        {cardItems.map((key,index)=><div key={index}>
            <div className="w-[50dvh] h-auto bg-white border-2 border-purple-800 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={key.img} alt="Card"/>
                <div className="p-4 text-center text-white">
                    {key.text}
                </div>
            </div>
        </div> )}
       <h1 className=" text-7xl text-slate-50">Read More</h1>
    </motion.div>
</div>
    </section>
}