"use client";

import { motion } from "framer-motion";

export default function Background() {
  const bars = [140, 200, 260, 330, 280, 390, 500];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#081221]">

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[420px]
          md:h-[700px]
          md:w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[60px]
          md:blur-[120px]
        "
      />

      {/* Grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M80 0H0V80"
              stroke="#6ecbff"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Cerchio */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 240,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          bottom-[-180px]
          md:bottom-[-350px]
          h-[520px]
          w-[520px]
          md:h-[900px]
          md:w-[900px]
          -translate-x-1/2
          rounded-full
          border
          border-cyan-300/10
        "
      />

      {/* Barre */}
      <div
        className="
          absolute
          bottom-0
          left-0
          flex
          w-full
          items-end
          justify-center
          gap-3
          opacity-10
        "
      >
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{
              height: [h * 0.6, h * 0.8, h * 0.6],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
            }}
            className="w-3 rounded-t bg-cyan-300"
          />
        ))}
      </div>

      {/* Trend */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <motion.polyline
          fill="none"
          stroke="#74d8ff"
          strokeWidth="2"
          points="
          0,760
          140,720
          300,690
          450,640
          620,610
          780,520
          940,560
          1110,450
          1290,380
          1480,300
          1660,260
          1920,120
          "
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>

      {/* Vignettatura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(8,18,33,.45)_100%)]" />

    </div>
  );
}