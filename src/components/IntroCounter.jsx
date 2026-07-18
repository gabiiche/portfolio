import { useEffect, useState } from "react";

export default function IntroCounter({ onFinish }) {
  const [n, setN] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {

    const totalMs = 1200;
    const steps = 100;
    const interval = totalMs / steps; 
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setN(current);
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => onFinish?.(), 200 + 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`intro-counter ${exiting ? "exit" : ""}`} aria-hidden="true">
      {n}
    </div>
  );
}
