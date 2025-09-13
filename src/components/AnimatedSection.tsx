import { ReactNode, HTMLAttributes } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-up-scale';
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'header' | 'main' | 'aside' | 'nav';
  className?: string;
  [key: string]: any;
}

export function AnimatedSection({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  stagger = 0,
  threshold = 0.1,
  as: Component = 'div',
  className,
  ...props 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    delay: delay + stagger 
  });

  const getAnimationClass = () => {
    if (!isVisible) return `animate-${animation}-initial`;
    return `animate-${animation}`;
  };

  return (
    <Component
      ref={ref as any}
      className={cn(
        'transition-all opacity-0',
        getAnimationClass(),
        isVisible && 'opacity-100',
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay + stagger}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

interface AnimatedListProps {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-up-scale';
  className?: string;
}

export function AnimatedList({ 
  children, 
  staggerDelay = 100, 
  animation = 'fade-up',
  className 
}: AnimatedListProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          stagger={index * staggerDelay}
          className="w-full"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}