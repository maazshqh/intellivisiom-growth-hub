import { useState } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  className?: string;
}

export function FlipCard({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  features, 
  href, 
  className 
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className={cn("flip-card-container", className)} style={{ perspective: '1200px' }}>
      <div 
        className={cn(
          "flip-card-inner group relative w-full h-80 cursor-pointer transition-all duration-500 ease-out",
          "hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50",
          isFlipped && "is-flipped"
        )}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isFlipped}
        aria-label={`${title} service card. Press to ${isFlipped ? 'show' : 'hide'} details.`}
      >
        {/* Front Face */}
        <div 
          className="flip-card-face flip-card-front absolute inset-0 w-full h-full rounded-xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-8 h-full flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{subtitle}</p>
            <Button variant="outline" size="sm" className="group/btn">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="flip-card-face flip-card-back absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-xl"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
              
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to={href} className="block">
              <Button variant="default" size="sm" className="w-full group/btn">
                Explore
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}