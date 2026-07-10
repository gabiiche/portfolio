const SKILLS = [
  "ux design", "ui design", "design system", "prototype", "figma",
  "branding", "social media assets", "video", "illustrator",
  "photoshop", "code", "html", "css",
];

export default function Ticker({ items = SKILLS }) {
  // list rendered twice so the -50% animation loops seamlessly
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
