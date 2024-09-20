"use client";
import "./styles.css";
import{ useState, useEffect } from "react";
// export default function Hero()
// {screen
//   return <section
//   // className=" grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black"
//    className=" flex flex-col justify-center items-center h-dvh bg-green-300">
//      <h1 className="takshakMainHeading text-8xl sm:text-9xl scale-110">Takshak 2024</h1>
//      <h2 className=" text-3xl font-bold">Decade decrypted</h2>
//     {/* <FlipLink href="about">About</FlipLink>
//     <FlipLink href="about">Telei</FlipLink>
//     <FlipLink href="about">Events</FlipLink> */}
//   </section>
// }

export default function Hero() {
  // const [VidSrc, setVidSrc] = useState<string>("RP-P.mp4");
  // const updateVidSrc = (): void =>{
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth >= 800) {
  //     setVidSrc("RP-L.mp4");
  //   }else {
  //     setVidSrc("RP-P.mp4");
  //   }
  // }
  // useEffect(() => {
  //   // Update image source on initial load
  //   updateVidSrc();
  //   window.addEventListener("resize", updateVidSrc);
  //   return () => window.removeEventListener("resize", updateVidSrc);
  // }, []);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <section className="h-screen ">
      <div className="Title fixed flex justify-center items-center  -z-5 h-2/5 w-screen  text-yellow-100 font-semibold text-center leading-relaxed">
        {/* <h2>Saptha</h2> */}
        <h1>{"TAKSHAK'24"}</h1>
        <div className="Title-bg hidden absolute top-0 -z-10 h-full w-screen"></div>
      </div>
      <div className="fixed h-full w-screen flex justify-center items-center overflow-hidden -z-20 bg-black">
        <video className="hidden lg:block"autoPlay muted loop id="myVideo">
          <source src="RP-L.mp4" type="video/mp4" />
        </video>
        <video className="lg:hidden"autoPlay muted loop id="myVideo">
          <source src="RP-P.mp4" type="video/mp4" />
        </video>
        {/* <img
          className="absolute w-screen h-auto"
          src="/images/TakshakNews.png"
          alt="image of record player"
        /> */}
        <div className="absolute h-screen w-screen bg-black/80"></div>
        <div className="absolute h-screen w-screen overlay"></div>
      </div>
      <div className="bottom-text absolute w-full text-7xl bottom-10 -z-10 md:text-9xl text-white font-semibold text-center" style={{
          transform: `translateX(${Math.min(scrollPosition*5, window.innerWidth)}px)`,
        }}>
        <h2>Is Coming to MACE</h2>
      </div>
    </section>
  );
}
// const FlipLink=({ children,href}:{children:string;href:string})=>{
//   return <motion.a
//   initial="initial"
//   whileHover="hovered"
//   whileTap={{ scale:1.4 }}
//   // transition={{
//   //   staggerChildren:0.2
//   // }}
//   className=" relative block overflow-hidden whitespace-nowrap font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
//   // href={href}
//   >
//     {/* <motion.div
//     variants={{
//       initial: { y: 0 },
//       hovered: { y:'-100%' },
//      }}>
//  {children}
//     </motion.div>

//     <motion.div
//     className=" absolute inset-0"
//     variants={{
//       initial: { y:'100%' },
//       hovered: { y:0 },
//      }}>
//  {children}
//     </motion.div> */}
//     <div>{children.split("").map((l,i)=><motion.span
//     className=" inline-block"
//      variants={{
//       initial: { y: 0 },
//       hovered: { y:'-100%' },
//      }}
//      transition={{
//       delay:0.2*i
//       }}
//     key={i}>{l}</motion.span> )}</div>
//     <div className="inline-block absolute inset-0">{children.split("").map((l,i)=><motion.span
//      className=" inline-block"
//      variants={{
//       initial: { y:'100%' },
//       hovered: { y:0 },
//      }}
//      transition={{
//       delay:0.2*i
//       }}
//     key={i}>{l}</motion.span> )}</div>

//    </motion.a>
// }
