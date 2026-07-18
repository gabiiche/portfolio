import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/about.css";

import nhLogo from "../assets/1-NH.svg";
import BMWLogo from "../assets/2-BMW.svg";
import ballantinesLogo from "../assets/3-Ballantines.svg";
import lifeskillsLogo from "../assets/4-LF.svg";
import pintLogo from "../assets/5-Pint.svg";
import kimberlyLogo from "../assets/6-Kimberly.svg";
import kotexLogo from "../assets/7-Kotex.svg";
import amexLogo from "../assets/8-AMEX.svg";
import uniLogo from "../assets/9-Uni.svg";
import googleLogo from "../assets/10-Google.svg";
import luckyLogo from "../assets/11-Lucky.svg";
import sugarmooLogo from "../assets/12-Sugarmoo.svg";

import Ticker from "../components/Ticker";  
import "../styles/ticker.css";  
import portrait1 from "../assets/portrait-1.png";

const ABOUT_CONTENT = {
  title: "About me",
  intro: [
    "I'm Gabrielle, a digital designer in London, crafting design systems and interfaces, brand identities, with a strong front-end knowledge that lets me design what ships and follow it into the build. I care about the details most people skip: accessibility, focus states, that last pixel.",
    "Off duty, I lose myself in RPGs, Baldur's Gate 3, I've completed every Ace Attorney game, I read more manga than I can count, and I gather with friends for D&D campaigns, where I've learned a party only survives by playing together.",
  ],
  clients: [
    { name: "National Highways", url: nhLogo },
    { name: "BMW", url: BMWLogo },
    { name: "Ballantines", url: ballantinesLogo },
    { name: "LifeSkills", url: lifeskillsLogo },
    { name: "Pint", url: pintLogo },
    { name: "Kimberly-Clark", url: kimberlyLogo },
    { name: "Kotex", url: kotexLogo },
    { name: "AMEX", url: amexLogo },
    { name: "Unilever", url: uniLogo },
    { name: "Google", url: googleLogo },
    { name: "Lucky Bet", url: luckyLogo },
    { name: "Sugarmoo", url: sugarmooLogo },
  ],
  portrait1: [portrait1],
};
const PORTRAITS = [portrait1];
const midpoint = Math.ceil(ABOUT_CONTENT.clients.length / 2);
const clientsColumn1 = ABOUT_CONTENT.clients.slice(0, midpoint);
const clientsColumn2 = ABOUT_CONTENT.clients.slice(midpoint);

export default function About() {
  return (
    <div className="home about-page">
      <Nav />

      <main className="w-100 about-main-gap">
        
        <section className="row">
          <div className="col-12 col-lg-6">
            <h1 className="about-title">{ABOUT_CONTENT.title}</h1>
          </div>
          <div className="col-12 col-lg-6 mt-lg-0 mt-5">
            <div className="about-intro">
              {ABOUT_CONTENT.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="row">
          <div className="col-12 col-xl-6">
            <h2 className="about-section-title">Clients</h2>
          </div>
          <div className="col-xl-6 d-xl-block d-lg-none d-md-none d-sm-block col-12 mt-lg-0 mt-5">
            <div className="clients-grid">
              {ABOUT_CONTENT.clients.map((item, index) => (
                <div key={index} className="client-logo">
                  <img src={item.url} alt={item.name} title={item.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-6 mt-5 d-xl-none d-lg-block d-md-block d-sm-none d-none">
                <div className="clients-grid">
    {clientsColumn1.map((item, index) => (
      <div key={index} className="client-logo">
        <img src={item.url} alt={item.name} />
      </div>
    ))}
  </div>
                    </div>
                    <div className="col-6 mt-5 d-xl-none d-lg-block d-md-block d-sm-none d-none">
                      <div className="clients-grid">
    {clientsColumn2.map((item, index) => (
      <div key={index} className="client-logo">
        <img src={item.url} alt={item.name} />
      </div>
    ))}
  </div>
                    </div>
            </div>

        </section>

<section className="about-portraits">
  <Ticker items={PORTRAITS} isImage={true} /> 
</section>

      </main>

      <Footer />
    </div>
  );
}
