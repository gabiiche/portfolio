import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <header className="hero-name w-100">
        <h1>Gabrielle</h1>
        <Ticker />
        <h1>Toure</h1>
        {/* Name is real text (accessibility + SEO), not an image */}
      </header>
      <Footer />
    </div>
  );
}
