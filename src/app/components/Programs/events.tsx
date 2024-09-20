"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Events() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const events = [
    { id: "event1", src: "/images/event1.jpg" },
    { id: "event2", src: "/images/event1.jpg" },
    { id: "event3", src: "/images/event1.jpg" },
    { id: "event4", src: "/images/event1.jpg" },
    { id: "event5", src: "/images/event1.jpg" },
    { id: "event6", src: "/images/event1.jpg" },
    { id: "event7", src: "/images/event1.jpg" },
    { id: "event8", src: "/images/event1.jpg" },
    { id: "event9", src: "/images/event1.jpg" },
    { id: "event10", src: "/images/event1.jpg" },
    { id: "event11", src: "/images/event1.jpg" },
    { id: "event12", src: "/images/event1.jpg" },
  ];

  // Transformations for the first set of events
  const translateXLeftFirstSet = useTransform(scrollYProgress, [0.1, 0.237, 0.375], ["-200px", "0px", "-200px"]);
  const translateXRightFirstSet = useTransform(scrollYProgress, [0.1, 0.237, 0.375], ["200px", "0px", "200px"]);
  const translateYFirstSet = useTransform(scrollYProgress, [0.1, 0.375], ["300px", "0px"]);
  const opacityFirstSet = useTransform(scrollYProgress, [0.1, 0.237, 0.375], [0, 1, 0]);
  const displayFirstSet = useTransform(scrollYProgress, [0.1, 0.375], ["block", "none"]);

  // Transformations for the second set of events
  const translateXLeftSecondSet = useTransform(scrollYProgress, [0.375, 0.5125, 0.65], ["-200px", "0px", "-200px"]);
  const translateXRightSecondSet = useTransform(scrollYProgress, [0.375, 0.5125, 0.65], ["200px", "0px", "200px"]);
  const translateYSecondSet = useTransform(scrollYProgress, [0.375, 0.65], ["300px", "0px"]);
  const opacitySecondSet = useTransform(scrollYProgress, [0.375, 0.5125, 0.65], [0, 1, 0]);
  const displaySecondSet = useTransform(scrollYProgress, [0.375, 0.65], ["block", "none"]);

  // Transformations for the third set of events
  const translateXLeftThirdSet = useTransform(scrollYProgress, [0.65, 0.7785, 0.925], ["-200px", "0px", "-200px"]);
  const translateXRightThirdSet = useTransform(scrollYProgress, [0.65, 0.7785, 0.925], ["200px", "0px", "200px"]);
  const translateYThirdSet = useTransform(scrollYProgress, [0.65, 0.925], ["300px", "0px"]);
  const opacityThirdSet = useTransform(scrollYProgress, [0.65, 0.7785, 0.925], [0, 1, 0]);
  const displayThirdSet = useTransform(scrollYProgress, [0.65, 0.925], ["block", "none"]);

  return (
    <motion.section ref={targetRef} className="h-[500vh] bg-black flex flex-col justify-start items-center">
      <div className="sticky top-0 left-0 flex flex-col items-center justify-center gap-8 p-32">
        <h2 className="text-4xl font-bold mb-8 text-white">Events</h2>

        {/* First set of events */}
        <motion.div style={{ translateY: translateYFirstSet, opacity: opacityFirstSet, display: displayFirstSet }}>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full">
            {events.slice(0, 4).map((event, index) => (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX: index < 2 ? translateXLeftFirstSet : translateXRightFirstSet,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Second set of events */}
        <motion.div style={{ translateY: translateYSecondSet, opacity: opacitySecondSet, display: displaySecondSet }}>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full">
            {events.slice(4, 8).map((event, index) => (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX: index < 2 ? translateXLeftSecondSet : translateXRightSecondSet,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Third set of events */}
        <motion.div style={{ translateY: translateYThirdSet, opacity: opacityThirdSet, display: displayThirdSet }}>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full">
            {events.slice(8, 12).map((event, index) => (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX: index < 2 ? translateXLeftThirdSet : translateXRightThirdSet,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
