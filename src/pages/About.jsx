import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SlideInView from "../components/SlideInView";
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
    "I'm Gabrielle, a digital designer in London, crafting design systems and interfaces, brand identities, with front-end knowledge that lets me design what ships and follow it into the build. I care about the details: accessibility, focus states and pixel perfection.",
    "Off duty, I lose myself in RPGs, Baldur's Gate 3, I've completed every Ace Attorney game, I love reading manga, and I gather with friends for D&D campaigns, where I've learned a party only survives by playing together.",
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
    <div className="">
      <Nav />

      <main className="w-100 d-flex flex-column about-main about-title-section">
        
        <section className="row">
          <SlideInView className="col-12 col-lg-6">
            <h1 className="about-title">{ABOUT_CONTENT.title}</h1>
          </SlideInView>
          <SlideInView className="col-12 col-lg-6 mt-lg-0 mt-5">
            <div className="about-intro">
              {ABOUT_CONTENT.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </SlideInView>
        </section>

        <section className="row">
          <SlideInView className="col-12 col-xl-6">
            <h2 className="about-section-title">Clients</h2>
          </SlideInView>
          <SlideInView className="col-xl-6 d-xl-block d-lg-none d-md-none d-sm-block col-12 mt-lg-0 mt-5">
            <div className="clients-grid d-flex flex-wrap align-items-start">
              {ABOUT_CONTENT.clients.map((item, index) => (
                <div key={index} className="client-logo d-flex align-items-center justify-content-center">
                  <img src={item.url} alt={item.name} title={item.name} />
                </div>
              ))}
            </div>
          </SlideInView>

          <div className="col-12">
            <div className="row">
              <SlideInView as="div" className="col-6 mt-5 d-xl-none d-lg-block d-md-block d-sm-none d-none">
                <div className="clients-grid d-flex flex-wrap align-items-start">
                  {clientsColumn1.map((item, index) => (
                    <div key={index} className="client-logo d-flex align-items-center justify-content-center">
                      <img src={item.url} alt={item.name} />
                    </div>
                  ))}
                </div>
              </SlideInView>
              <SlideInView as="div" className="col-6 mt-5 d-xl-none d-lg-block d-md-block d-sm-none d-none">
                <div className="clients-grid d-flex flex-wrap align-items-start">
                  {clientsColumn2.map((item, index) => (
                    <div key={index} className="client-logo d-flex align-items-center justify-content-center">
                      <img src={item.url} alt={item.name} />
                    </div>
                  ))}
                </div>
              </SlideInView>
            </div>
          </div>

        </section>

<SlideInView className="about-portraits">
  <Ticker items={PORTRAITS} isImage={true} /> 
</SlideInView>

      </main>

      <Footer />
    </div>
  );
}
