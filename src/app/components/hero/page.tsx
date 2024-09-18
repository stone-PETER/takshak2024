"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen w-screen">
      <div className="fixed h-screen w-screen flex justify-center items-center overflow-hidden -z-10">
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
        <div className="text-6xl font-semibold z-10 text-center leading-relaxed"><h2>Saptha</h2>
          <h1>Takshak 24</h1></div>
        <img
          className="absolute w-screen md:hidden"
          src="/images/recordPlayer-flipped.jpeg"
          alt="image of record player"
        />
        <img
          className="hidden absolute w-screen md:block xl:h-screen xl:w-auto"
          src="/images/recordPlayer-Hero.jpeg"
          alt="image of record player"
        />
        <div className="absolute h-screen w-screen bg-black/50"></div>
      </div>
    </section>
  );
}
