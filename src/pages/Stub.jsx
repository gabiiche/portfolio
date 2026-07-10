import Nav from "../components/Nav";
import Footer from "../components/Footer";

// TEMPORARY stub — we'll build each page from its Figma frame.
export default function Stub({ title }) {
  return (
    <div className="home">
      <Nav />
      <main className="px-lg-5 py-5 w-100">
        <h1 style={{ fontSize: "clamp(48px,8vw,120px)", textTransform: "uppercase" }}>{title}</h1>
        <p>Coming from Figma…</p>
      </main>
      <Footer />
    </div>
  );
}
