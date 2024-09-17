 'use client'
export default function Hero()
{
  return <section
  // className=" grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black"
   className=" flex flex-col justify-center items-center h-dvh bg-green-300">
     <h1 className="takshakMainHeading text-8xl sm:text-9xl scale-110">Takshak 2024</h1> 
     <h2 className=" text-3xl font-bold">Decade decrypted</h2>
    {/* <FlipLink href="about">About</FlipLink>
    <FlipLink href="about">Telei</FlipLink>
    <FlipLink href="about">Events</FlipLink> */}
  </section>
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