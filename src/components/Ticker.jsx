const SKILLS = [
  "ux design", "ui design", "product design",
  "design system", "prototype", "accessibility",
  "brand identity", "art direction",
  "ux research", "data visualisation",
  "front end", "wordpress",
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
