import Nav from "../components/Nav";
import Footer from "../components/Footer";

// TEMPORARY stub — we'll build each page from its Figma frame.
export default function Stub({ title }) {
  return (
    <div className="home">
      <Nav />
      <main className="w-100 test">
        <div className="row">
        <div className="col-12 col-lg-6">
        <h1 style={{ fontSize: "clamp(48px,8vw,120px)", textTransform: "uppercase" }}>{title}</h1>
        </div>
        <div className="col-12 col-lg-6">
          <p>I'm Gabrielle, a digital designer in London, crafting design systems and interfaces, brand identities, with a strong front-end knowledge that lets me design what ships and follow it into the build. I care about the details most people skip: accessibility, focus states, that last pixel.</p>
          <p>Off duty, I lose myself in RPGs, Baldur's Gate 3, I've completed every Ace Attorney game, I read more manga than I can count, and I gather with friends for D&D campaigns, where I've learned a party only survives by playing together.</p>
        </div>
     </div>
      </main>
      <Footer />
    </div>
  );
}
