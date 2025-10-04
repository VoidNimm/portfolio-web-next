"use client";

import { useState, useEffect } from "react";
import CountUp from "./CountUp";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`fixed inset-0 flex flex-col items-center justify-center z-[999] bg-neutral-50`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center">
              <CountUp
                to={100}
                duration={2.5}
                onEnd={handleLoadingComplete}
                className={`text-5xl md:text-7xl font-mono text-neutral-950`}
              />
            </div>
            <motion.p
              className={`text-sm tracking-[0.2em] uppercase mt-2 text-neutral-500`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Loading Awesomeness...
            </motion.p>
          </div>
        </motion.div>
      )}
      {!isLoading && <>{children}</>}
    </AnimatePresence>
  );
}
