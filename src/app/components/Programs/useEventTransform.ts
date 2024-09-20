import { useTransform, MotionValue } from "framer-motion";

export default function useEventTransform(
  scrollYProgress: MotionValue<number>,
  index: number,
  rangeStart: number,
  rangeEnd: number
) {
  const translateX = useTransform(
    scrollYProgress,
    [rangeStart, (rangeStart + rangeEnd) / 2, rangeEnd],
    index < 2 ? ["-200px", "0px", "-200px"] : ["200px", "0px", "200px"]
  );
  const translateY = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    ["300px", "0px"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [rangeStart, (rangeStart + rangeEnd) / 2, rangeEnd],
    [0, 1, 0]
  );
  const display = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    ["block", "none"]
  );

  return { translateX, translateY, opacity, display };
}
