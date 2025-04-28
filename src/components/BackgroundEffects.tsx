import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const ORBS = [
  {
    color: 'rgba(168, 85, 247, 0.15)', // Purple
    size: 300,
    duration: 20,
    initialX: '20vw',
    initialY: '20vh',
    animate: {
      x: ['20vw', '60vw', '30vw', '70vw', '20vw'],
      y: ['20vh', '60vh', '80vh', '40vh', '20vh'],
      scale: [1, 1.2, 1, 1.1, 1]
    }
  },
  {
    color: 'rgba(239, 68, 68, 0.15)', // Red
    size: 250,
    duration: 25,
    initialX: '70vw',
    initialY: '30vh',
    animate: {
      x: ['70vw', '20vw', '60vw', '30vw', '70vw'],
      y: ['30vh', '70vh', '20vh', '60vh', '30vh'],
      scale: [1, 1.1, 1.2, 1, 1]
    }
  },
  {
    color: 'rgba(59, 130, 246, 0.15)', // Blue
    size: 280,
    duration: 22,
    initialX: '40vw',
    initialY: '70vh',
    animate: {
      x: ['40vw', '80vw', '20vw', '60vw', '40vw'],
      y: ['70vh', '30vh', '60vh', '20vh', '70vh'],
      scale: [1.1, 1, 1.2, 1, 1.1]
    }
  }
];

export function BackgroundEffects() {
  const { darkMode } = useTheme();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
        }}
      />

      {/* Animated Orbs */}
      {ORBS.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-2xl mix-blend-normal"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            x: orb.initialX,
            y: orb.initialY
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}