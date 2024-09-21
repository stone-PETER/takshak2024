"use client";
import Hero from "./components/hero/page";
//import Game from "./components/hero/game";
import About from "./components/About/page";
import Telei from "./components/telei/page";
//import Events from "./components/Programs/events";
import Footer from "./components/footer/footer";
import MoreEvents from "./components/Programs/AllEvents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Telei />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/events" element={<MoreEvents />} />
      </Routes>
    </Router>
  );
}
