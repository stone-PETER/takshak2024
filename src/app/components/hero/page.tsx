"use client";
import "./styles.css";
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
  return (
    <section className="h-screen ">
      <div className="Title fixed -z-5 h-1/5 w-screen text-7xl md:text-9xl text-yellow-100 font-semibold text-center leading-relaxed">
        {/* <h2>Saptha</h2> */}
        <h1>TAKSHAK'24</h1>
        <div className="Title-bg absolute top-0 -z-10 h-full w-screen"></div>
      </div>
      <div className="fixed h-4/5 top-[20%] w-screen flex justify-center items-center overflow-hidden -z-10 bg-black">
        {/* <Image
          src="/images/recordPlayer-Hero.jpeg"
          width={500}
          height={300}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "100vh",
          }}
          
          alt="Picture of Record Player"
        /> */}

        <img
          className="absolute w-screen h-auto"
          src="/images/TakshakNews.png"
          alt="image of record player"
        />
        {/* <img
          className="hidden absolute w-screen md:block"
          src="/images/TakshakNews.png"
          alt="image of record player"
        /> */}
        <div className="absolute h-screen w-screen bg-black/70"></div>
        {/* <div className="overlay absolute h-screen w-screen bg-black/90"></div> */}
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
