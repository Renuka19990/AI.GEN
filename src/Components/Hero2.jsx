import "../CustomStyling/hero2.css";
import { useEffect, useRef } from 'react';

export default function Hero2() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const text = textRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        text.classList.add('text-animate-in');
      } else {
        text.classList.remove('text-animate-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero2">
      <div className="hero2-first">
        <div ref={textRef} className="fade-in-scale text-animate-in">
          <h2><span className="text-yellow">Create, customize, and publish your </span>digital persona to life effortlessly.</h2>
        </div>
      </div>
    </section>
  );
}
