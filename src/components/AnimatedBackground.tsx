import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, Coffee, Brain, Code, Box, Sparkles, 
  Layers, Zap, Hexagon, Component, Blocks, Pencil, 
  Monitor, Cpu, Rocket, Palette, Shapes, PenTool
} from 'lucide-react';

const AnimatedBackground: React.FC<{ className?: string }> = ({ className }) => {
  // Generate random doodle elements
  const doodleElements = useMemo(() => {
    const icons = [
      Lightbulb, Coffee, Brain, Code, Box, Sparkles, 
      Layers, Zap, Hexagon, Component, Blocks, Pencil,
      Monitor, Cpu, Rocket, Palette, Shapes, PenTool
    ];
    
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 24 + 16, // 16px to 40px
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 25 + 20}s`,
      opacity: Math.random() * 0.15 + 0.05,
      rotation: Math.random() * 360
    }));
  }, []);

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-300", className)}>
      {/* Animated Gradient Orbs - Teal colors */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-teal-400/20 via-teal-300/10 to-transparent blur-[120px] animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-cyan-500/15 via-teal-500/10 to-transparent blur-[150px] animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }} />
      <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-emerald-400/15 via-transparent to-transparent blur-[100px] animate-float" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      
      {/* Floating Doodle Elements Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {doodleElements.map((el) => {
          const Icon = el.Icon;
          return (
            <div
              key={el.id}
              className="absolute text-teal-600/40 dark:text-teal-300/40 transition-colors duration-300"
              style={{
                top: el.top,
                left: el.left,
                '--target-opacity': el.opacity,
                animation: `drift ${el.duration} linear infinite`,
                animationDelay: el.delay,
                filter: 'drop-shadow(0 0 10px rgba(45, 212, 191, 0.2))'
              } as React.CSSProperties}
            >
              <Icon 
                size={el.size} 
                strokeWidth={1.5} 
                style={{ transform: `rotate(${el.rotation}deg)` }} 
              />
            </div>
          );
        })}
      </div>

      {/* Elegant subtle grid to ground the design */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-300" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 0L0 0 0 80' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Shimmering vertical light rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-[25%] h-[200%] w-[1px] bg-gradient-to-b from-transparent via-teal-500/30 to-transparent" style={{ animation: 'shimmerVertical 15s linear infinite' }}></div>
        <div className="absolute top-0 left-[35%] h-[200%] w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" style={{ animation: 'shimmerVertical 20s linear infinite', animationDelay: '5s' }}></div>
        <div className="absolute top-0 left-[75%] h-[200%] w-[1px] bg-gradient-to-b from-transparent via-teal-300/30 to-transparent" style={{ animation: 'shimmerVertical 18s linear infinite', animationDelay: '10s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;