import NavLink from "./NavLink";
import ArrowIcon from "./ArrowIcon";
import { Link } from "react-router-dom";

export default function Nav({ className = "" }) {
  return (
    <div className={`nav-wrap ${className}`}>
      <Link to="/" aria-label="Home — Gabrielle Touré">
        <img src="/assets/logo.svg" alt="GT logo" height="73" />
      </Link>
      <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
        <li><NavLink to="/about" iconRight={<ArrowIcon />}>about me</NavLink></li>
        <li><NavLink to="/projects" iconRight={<ArrowIcon />}>projects</NavLink></li>
      </ul>
    </div>
  );
}
