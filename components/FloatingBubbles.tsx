'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 15,
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(168, 218, 220, 0.4))',
            boxShadow: '0 4px 20px rgba(168, 218, 220, 0.3)',
          }}
          animate={{
            y: ['100vh', '-20vh'],
            x: [0, Math.sin(bubble.id) * 50, 0],
            scale: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}