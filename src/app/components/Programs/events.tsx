"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Events() {
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className="h-[500vh] flex flex-col justify-start items-center" ref={ref}>
      <div className="sticky top-0 left-0 flex flex-col items-center justify-center gap-8 p-32">
        <h2 className="text-4xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full">
          {events.slice(0, 4).map((event, index) => {
            const translateX = useTransform(
              scrollYProgress,
              [0.1, 0.237, 0.375],
              index < 2 ? ["-200px", "0px", "-200px"] : ["200px", "0px", "200px"]
            );
            const translateY = useTransform(
              scrollYProgress,
              [0.1, 0.375],
              ["300px", "0px"]
            );
            const opacity = useTransform(scrollYProgress, [0.1, 0.237, 0.375], [0, 1, 0]);
            // Use a direct array mapping for display property
            const display = useTransform(scrollYProgress, [0.1, 0.375], ["block", "none"]);

            return (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX,
                  translateY,
                  opacity,
                  display,
                }}
              />
            );
          })}

          {events.slice(4, 8).map((event, index) => {
            const translateX = useTransform(
              scrollYProgress,
              [0.375, 0.5125, 0.65],
              index < 2 ? ["-200px", "0px", "-200px"] : ["200px", "0px", "200px"]
            );
            const translateY = useTransform(
              scrollYProgress,
              [0.375, 0.65],
              ["300px", "0px"]
            );
            const opacity = useTransform(scrollYProgress, [0.375, 0.5125, 0.65], [0, 1, 0]);
            const display = useTransform(scrollYProgress, [0.375, 0.65], ["block", "none"]);

            return (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX,
                  translateY,
                  opacity,
                  display,
                }}
              />
            );
          })}

          {events.slice(8, 12).map((event, index) => {
            const translateX = useTransform(
              scrollYProgress,
              [0.65, 0.885, 0.925],
              index < 2 ? ["-200px", "0px", "-200px"] : ["200px", "0px", "200px"]
            );
            const translateY = useTransform(
              scrollYProgress,
              [0.65, 0.925],
              ["300px", "0px"]
            );
            const opacity = useTransform(scrollYProgress, [0.65, 0.7785, 0.925], [0, 1, 0]);
            const display = useTransform(scrollYProgress, [0.65, 0.925], ["block", "none"]);

            return (
              <motion.img
                key={event.id}
                src={event.src}
                width={300}
                height={300}
                className="object-cover"
                style={{
                  translateX,
                  translateY,
                  opacity,
                  display,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
