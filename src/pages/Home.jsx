import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import IntroCounter from "../components/IntroCounter";

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

  const revealClass = revealed ? "in" : "";

  return (
    <>
      {!counterDone && <IntroCounter onFinish={() => setCounterDone(true)} />}

      <div className="home">
        <Nav className={`reveal delay-1 ${revealClass}`} />

        <header className={`header reveal delay-2 ${revealClass}`}>
          <h1 className="display">Gabrielle</h1>
          <div className={`ticker-slide-in ${tickerIn ? "in" : ""}`}>
            <Ticker />
          </div>
          <h1 className="display">Toure</h1>
        </header>

        <Footer className={`reveal delay-3 ${revealClass}`} />
      </div>
    </>
  );
}