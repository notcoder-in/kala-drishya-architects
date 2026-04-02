"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";

const useLoop = (delay = 1000) => {
  const [key, setKey] = useState(0);

  const incrementKey = useCallback(() => {
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementKey, delay);
    return () => clearInterval(interval);
  }, [delay, incrementKey]);

  return { key };
};

export { useLoop };

interface AnimatedCounterProps {
  items: string[];
  delay?: number;
  className?: string;
}

const AnimatedCounter = ({ items, delay = 2000, className }: AnimatedCounterProps) => {
  const { key } = useLoop(delay);

  const currentItem = useMemo(() => {
    return items[key % items.length];
  }, [items, key]);

  return (
    <div className={`overflow-hidden relative h-[1.2em] ${className ?? ""}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {currentItem}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export { AnimatedCounter };
