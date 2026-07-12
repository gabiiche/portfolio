import { useEffect, useState } from "react";

/**
 * IntroCounter — step 1 of the intro.
 * Counts 0 → 100 fast, then slides itself off-screen upwards.
 * Fires onFinish() the moment it's gone, so step 2 can start.
 */
export default function IntroCounter({ onFinish }) {
  const [n, setN] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Count 0 → 100 (roughly matches --counter-duration in intro.css)
    const totalMs = 1200;
    const steps = 100;
    const interval = totalMs / steps; // 12ms per tick
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setN(current);
      if (current >= 100) {
        clearInterval(timer);
        // small pause so 100 is readable, then slide out
        setTimeout(() => setExiting(true), 200);
        // fire onFinish once the slide-out finishes (500ms in intro.css)
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
