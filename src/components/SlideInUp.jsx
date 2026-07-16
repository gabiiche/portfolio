import { useEffect, useRef } from 'react';
import '../styles/slide-in-up.css';

export default function SlideInUp({ children, as = 'span', className = '', trigger = true }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !trigger) return;
    // Trigger animation only when trigger is true
    ref.current.classList.add('slide-in');
  }, [trigger]);

  const Component = as;
  return (
    <Component ref={ref} className={`slide-in-up ${className}`}>
      {children}
    </Component>
  );
}