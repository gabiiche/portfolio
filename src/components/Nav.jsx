import NavLink from "./NavLink";
import ArrowIcon from "./ArrowIcon";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function Nav({ className = "" }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ulClass = isSmallScreen 
    ? "d-flex flex-column align-items-center list-unstyled m-0"
    : "d-flex align-items-center gap-4 list-unstyled m-0";

  return (
    <div className={`nav-wrap ${className}`}>
      <Link to="/" aria-label="Home — Gabrielle Touré">
        <img src={logo} alt="GT logo" height="73" />
      </Link>
      <ul className={ulClass}>
        <li><NavLink to="/about" iconRight={<ArrowIcon />}>about me</NavLink></li>
        <li><NavLink to="/projects" iconRight={<ArrowIcon />}>projects</NavLink></li>
      </ul>
    </div>
  );
}
