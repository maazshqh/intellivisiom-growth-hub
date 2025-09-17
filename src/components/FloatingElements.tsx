import { useEffect, useRef } from 'react';

interface FloatingElementProps {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

export function FloatingElement({ className = "", delay = 0, children }: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial animation delay
    element.style.animationDelay = `${delay}ms`;
    
    return () => {
      element.style.animationDelay = '';
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`floating-element ${className}`}
      style={{
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      {children}
    </div>
  );
}

export function NetworkNode({ className = "", size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3', 
    lg: 'w-4 h-4'
  };

  return (
    <div className={`${sizeClasses[size]} bg-accent/30 rounded-full ${className}`}>
      <div className={`w-full h-full bg-accent/60 rounded-full animate-pulse`}></div>
    </div>
  );
}

export function ParticleBlob({ className = "" }: { className?: string }) {
  return (
    <div className={`particle-blob ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-lg"></div>
    </div>
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`grid-pattern ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path 
              d="M 60 0 L 0 0 0 60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-accent"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}