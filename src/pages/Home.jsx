import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import IntroCounter from "../components/IntroCounter";
import SlideInUp from "../components/SlideInUp";
import "../styles/home.css";
import "../styles/ticker.css";


let introHasPlayed = false;

export default function Home() {
const [counterDone, setCounterDone] = useState(introHasPlayed);
const [revealed, setRevealed] = useState(introHasPlayed);
const [tickerIn, setTickerIn] = useState(introHasPlayed);

useEffect(() => {
  if (!counterDone) return;
  introHasPlayed = true;  
  requestAnimationFrame(() => setRevealed(true));
  const t = setTimeout(() => setTickerIn(true), 400);
  return () => clearTimeout(t);
}, [counterDone]);


  return (
    <>
      {!counterDone && <IntroCounter onFinish={() => setCounterDone(true)} />}

      {counterDone && (
        <div className="home">
          <Nav />

          <header className="header">
            <SlideInUp as="h1" className="display" trigger={counterDone}>Gabrielle</SlideInUp>
            <div className={`ticker-slide-in ${tickerIn ? "in" : ""}`}>
              <Ticker />
            </div>
            <SlideInUp as="h1" className="display" trigger={counterDone}>Toure</SlideInUp>
          </header>

          <Footer />
        </div>
      )}
    </>
  );
}