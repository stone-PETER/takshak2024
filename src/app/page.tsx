import Hero from "./components/hero/page";
import About from "./components/About/page";
import Telei from "./components/telei/page";
import Events from "./components/Programs/events";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Telei />
      <Events />
      <Footer />
    </>
  );
}
