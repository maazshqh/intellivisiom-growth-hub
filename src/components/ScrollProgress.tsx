import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-50">
      <div 
        className="h-full bg-gradient-primary transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}