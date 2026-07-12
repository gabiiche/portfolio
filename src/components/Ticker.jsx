const SKILLS = [
  "ux design", "ui design", "product design",
  "design system", "prototype", "accessibility",
  "brand identity", "art direction",
  "ux research", "data visualisation",
  "front end", "wordpress",
];

export default function Ticker({ items = SKILLS }) {

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...items, ...items].map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}
