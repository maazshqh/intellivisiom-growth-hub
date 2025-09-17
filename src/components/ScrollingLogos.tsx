import { useEffect, useRef } from 'react';
import partnerLogo1 from "@/assets/partner-logo-1.jpg";

const logos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: partnerLogo1,
  alt: `Partner ${i + 1}`,
  name: `Company ${i + 1}`
}));

export function ScrollingLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += speed;
      
      // Reset position when we've scrolled past half the content
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-12 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* First set of logos */}
        {logos.map((logo) => (
          <div
            key={`first-${logo.id}`}
            className="flex-shrink-0 flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {logos.map((logo) => (
          <div
            key={`second-${logo.id}`}
            className="flex-shrink-0 flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}