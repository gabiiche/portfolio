const SKILLS = [
  "product design", "design system", "design engineering",
  "front end", "react", "ai-assisted design", "claude code",
  "accessibility", "ux design", "ui design",
  "prototype", "ux research", "data visualisation",
  "brand identity", "art direction",
];

export default function Ticker({ items = SKILLS, isImage = false }) {
  const repeatCount = isImage ? 10 : 2;  
  const repeatedItems = Array.from({ length: repeatCount }, () => items).flat();
 return (
    <div className="ticker" aria-hidden="true">
      <div className={`ticker__track ${isImage ? "ticker__track--images" : ""}`}>
        {repeatedItems.map((item, i) => (
          isImage ? (
            <div key={i} className="ticker-image-item">
              <img src={item} alt="" />
            </div>
          ) : (
            <p key={i}>{item}</p>
          )
        ))}
      </div>
    </div>
  );
}
