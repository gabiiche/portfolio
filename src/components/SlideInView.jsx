import { useEffect, useRef } from 'react';
import '../styles/slide-in-up.css';

/**
 * SlideInView Component
 * 
 * Animates content when it enters the viewport using Intersection Observer
 * - Triggers slide-up animation when element becomes visible
 * - No fade in/out, only the slide-up animation
 * - Stops observing after animation is triggered
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.as - HTML element to render (default: 'span')
 * @param {string} props.className - Additional CSS classes
 */
export default function SlideInView({ children, as = 'span', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Intersection Observer - triggers when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('slide-in');
          // Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Component = as;
  return (
    <Component ref={ref} className={`slide-in-up ${className}`}>
      {children}
    </Component>
  );
}
