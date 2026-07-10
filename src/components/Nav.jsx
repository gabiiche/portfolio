import NavLink from "./NavLink";
import ArrowIcon from "./ArrowIcon";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="d-flex justify-content-between align-items-center w-100 px-lg-5">
      <Link to="/" aria-label="Home — Gabrielle Touré">
        {/* replace with your GT logo SVG export */}
        <img src="/assets/logo.svg" alt="GT logo" height="73" />
      </Link>
      <ul className="d-flex align-items-center gap-5 list-unstyled m-0">
        <li><NavLink to="/about" iconRight={<ArrowIcon />}>about me</NavLink></li>
        <li><NavLink to="/projects" iconRight={<ArrowIcon />}>projects</NavLink></li>
      </ul>
    </nav>
  );
}
