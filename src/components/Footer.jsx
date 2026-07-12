import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";

/* Local mini-NavLink so the label can be hidden on xs via .footer-label */
function FooterLink({ href, icon, label, ariaLabel }) {
  return (
    <a href={href} className="nav-link-gt" aria-label={ariaLabel} target="_blank" rel="noreferrer">
      <span className="icon icon-lg" aria-hidden="true">{icon}</span>
      <span className="footer-label">{label}</span>
    </a>
  );
}

export default function Footer({ className = "" }) {
  return (
    <div className={`footer-wrap ${className}`}>
      <p className="copyright">©2026</p>
      <ul className="footer-links d-flex align-items-center list-unstyled m-0">
        <li><FooterLink href="mailto:toureegabrielle@gmail.com" icon={<EnvelopeIcon />} label="email" ariaLabel="Email Gabrielle" /></li>
        <li><FooterLink href="https://www.linkedin.com/in/gabrielle-toure/" icon={<LinkedInIcon />} label="linkedin" ariaLabel="LinkedIn profile" /></li>
        <li><FooterLink href="/assets/cv-gabrielle-toure.pdf" icon={<DocIcon />} label="cv" ariaLabel="Download CV (PDF)" /></li>
      </ul>
    </div>
  );
}

/* Simple SVG icons — replace with your Figma exports when you have them */
function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 17v-7" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}
