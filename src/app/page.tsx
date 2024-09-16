import Image from "next/image";
import Hero from "./components/hero/page";
import About from "./components/About/page";
import Telei from "./components/telei/page";

export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Telei/>
   </>
  );
}
