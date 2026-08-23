import NavLink from "./NavLink";
import ArrowIcon from "./ArrowIcon";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "../styles/nav-footer.css";

export default function Nav({ className = "" }) {
  return (
    <div className={`nav-wrap d-flex align-items-center justify-content-between ${className}`}>
      <Link to="/" aria-label="Home — Gabrielle Touré" className="nav-logo-link">
        <Logo />
      </Link>
      <ul className="d-flex flex-column flex-md-row align-items-center gap-md-4 list-unstyled m-0">
        <li><NavLink to="/about" iconRight={<ArrowIcon />}>about me</NavLink></li>
        <li><NavLink to="/projects" iconRight={<ArrowIcon />}>projects</NavLink></li>
      </ul>
    </div>
  );
}
