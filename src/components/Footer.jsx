import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center w-100 px-lg-5">
      <p className="m-0" style={{ color: "var(--text-white)", letterSpacing: "6.3px" }}>©2026</p>
      <ul className="d-flex align-items-center gap-5 list-unstyled m-0">
        <li>
          <NavLink href="mailto:toureegabrielle@gmail.com" ariaLabel="Email Gabrielle">
            email
          </NavLink>
        </li>
        <li>
          <NavLink href="https://www.linkedin.com/in/gabrielle-toure/" ariaLabel="LinkedIn profile">
            linkedin
          </NavLink>
        </li>
        <li>
          <NavLink href="/assets/cv-gabrielle-toure.pdf" ariaLabel="Download CV (PDF)">
            cv
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
