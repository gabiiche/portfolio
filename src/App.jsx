import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stub from "./pages/Stub";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Stub title="Projects" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/national-highways" element={<Stub title="National Highways" />} />
        <Route path="/projects/ballantines" element={<Stub title="Ballantine's" />} />
        <Route path="/projects/ecobeat" element={<Stub title="Ecobeat" />} />
        <Route path="/projects/mystery-guest" element={<Stub title="Mystery Guest" />} />
        <Route path="/projects/dynamic-jeunes" element={<Stub title="Dynamic Jeunes" />} />
      </Routes>
    </BrowserRouter>
  );
}
