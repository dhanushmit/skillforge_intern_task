'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        {/* Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mb-8 inline-block"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-6 rounded-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold gradient-text mb-4">
          Loading SkillForge
        </h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
