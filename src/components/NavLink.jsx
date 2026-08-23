import { Link } from "react-router-dom";

/**
 * NavLink — the Figma "li" component.
 * Default = base style, hover/focus handled in navlink.css.
 */
export default function NavLink({ to, href, children, iconLeft = null, iconRight = null, ariaLabel }) {
  const content = (
    <>
      {iconLeft && <span className="icon icon-lg" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon" aria-hidden="true">{iconRight}</span>}
    </>
  );

  // external links (mailto, linkedin, cv pdf) use <a>, internal pages use router <Link>
  if (href) {
    return (
      <a href={href} className="nav-link-gt d-inline-flex align-items-center gap-4 text-decoration-none" aria-label={ariaLabel} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className="nav-link-gt d-inline-flex  gap-4 text-decoration-none" aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
