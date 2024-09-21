"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const cardItems = [
    {
      img: "/images/Events/Ascension.jpg",
      title: "Ascension",
      text: "text 1",
      link: "https://forms.gle/ux6UT7Bc3cCHT2dY9",
    },
    {
      img: "/images/Events/TClash.jpg",
      title: "TClash",
      text: "text 3",
      link: "http://yepdesk.com/t-clash",
    },
    {
      img: "/images/Events/BGMI.jpg",
      title: "BGMI",
      text: "text 3",
      link: "https://www.yepdesk.com/bgmi4",
    },
    {
      img: "/images/Events/FrameOfMind.jpg",
      title: "FrameOfMind",
      text: "text 5",
      link: "https://forms.gle/ERvnMUtxKdknG7V99",
    },
    {
      img: "/images/Events/workshops/BotBuild.jpg",
      title: "Bot Build",
      text: "text 2",
      link: "https://forms.gle/UqUt1QBnZ73vdtAz5",
    },
    {
      img: "/images/Events/workshops/BullBearsBrains.jpg",
      title: "Bulls Bears and Brains",
      text: "text 3",
      link: "https://forms.gle/ziZ2zttYKfAvpwp46",
    },
  ];
  return (
    <section ref={targetRef} className=" relative h-[500vh] bg-slate-900">
      <div className=" bg-black sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x, rotate: -0.9 }} className=" flex gap-3">
          {cardItems.map((key, index) => (
            <div key={index}>
              <div className="w-[50dvh] h-auto bg-white border-2 border-purple-800 rounded-md overflow-hidden">
                <a href={key.link} target="_blank">
                  <img
                    className="w-full h-full object-cover"
                    src={key.img}
                    alt="Card"
                  />
                </a>
                <div className="p-4 text-center text-black font-bold">{key.title}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
