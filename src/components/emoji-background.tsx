"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const EMOJIS = ["🚀", "💻", "🔥", "✨", "🤖", "🌟", "⚡", "🎨", "🧠", "💼"];

interface Emoji {
  id: number;
  x: number;
  y: number;
  char: string;
  size: number;
  duration: number;
}

const EmojiBackground = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const spawnEmoji = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const char = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const size = Math.random() * 20 + 20; // 20px - 40px
    const duration = Math.random() * 3 + 2; // 2s - 5s
    
    setEmojis((prev) => [...prev.slice(-15), { id, x, y, char, size, duration }]);
    
    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => e.id !== id));
    }, duration * 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) { // 8% chance per move to spawn
        spawnEmoji(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        spawnEmoji(e.clientX + (Math.random() * 40 - 20), e.clientY + (Math.random() * 40 - 20));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [spawnEmoji]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
      <AnimatePresence>
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            initial={{ opacity: 0, scale: 0, x: emoji.x, y: emoji.y }}
            className="emoji-particle"
            animate={{ 
              opacity: [0, 0.6, 0], 
              scale: [0.5, 1.2, 0.8],
              y: emoji.y - 150 - (Math.random() * 100),
              x: emoji.x + (Math.random() * 100 - 50)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: emoji.duration, ease: "easeOut" }}
            style={{ 
              position: "absolute", 
              fontSize: emoji.size,
              filter: "blur(0.5px)"
            }}
          >
            {emoji.char}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Subtle Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.02),transparent_70%)]" />
    </div>
  );
};

export default EmojiBackground;
