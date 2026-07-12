import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";
import IconEmail from "../assets/email.svg";
import IconLinkedin from "../assets/Linkedin.svg";
import IconEmailWhite from "../assets/email-white.svg";
import IconLinkedinWhite from "../assets/Linkedin-white.svg";

function FooterLink({ href, icon, iconHover, label, ariaLabel }) {
  return (
    <a href={href} className="nav-link-gt" aria-label={ariaLabel} target="_blank" rel="noreferrer">
      <span className="icon icon-lg" aria-hidden="true">
      <img className="icon icon-lg" aria-hidden="true" src={icon} alt="" />
      <img className="icon-hover" src={iconHover} alt="" />
      </span>
      <span className="footer-label">{label}</span>
    </a>
  );
}

export default function Footer({ className = "" }) {
  return (
    <div className={`footer-wrap ${className}`}>
      <p className="copyright">©2026</p>
      <ul className="footer-links d-flex align-items-center list-unstyled m-0">
        <li><FooterLink href="mailto:toureegabrielle@gmail.com" icon={IconEmail} iconHover={IconEmailWhite} label="email" ariaLabel="Email Gabrielle" /></li>
        <li><FooterLink href="https://www.linkedin.com/in/gabrielle-toure/" icon={IconLinkedin} iconHover={IconLinkedinWhite} label="linkedin" ariaLabel="LinkedIn profile" /></li>
      </ul>
    </div>
  );
}