"use client";

import { motion } from "framer-motion";

export function Boxes() {
  const rows = new Array(3).fill(1);
  const cols = new Array(3).fill(1);

  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <div className="absolute h-full w-full">
        {rows.map((_, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-3 gap-4"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.2,
              duration: 0.5,
            }}
          >
            {cols.map((_, j) => (
              <div
                key={j}
                className="h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/0"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
