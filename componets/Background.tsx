"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Sfondo */}
      <div className="absolute inset-0 bg-[#081221]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      {/* Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
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

        <rect width="1920" height="1080" fill="url(#grid)" />
      </svg>

      {/* Cerchi HUD */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        className="absolute left-1/2 bottom-[-450px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-cyan-300/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        }}
        className="absolute left-1/2 bottom-[-350px] h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-cyan-300/10"
      />

      {/* Barre economiche */}

      <div className="absolute bottom-0 left-0 flex w-full items-end justify-center gap-4 opacity-20">

        {[120,180,220,260,340,280,420,480,560,510,620].map((h,i)=>(
          <motion.div
            key={i}
            animate={{
              height:[h,h+40,h]
            }}
            transition={{
              duration:2+i*.2,
              repeat:Infinity
            }}
            style={{height:h}}
            className="w-6 rounded-t bg-cyan-300"
          />
        ))}

      </div>

      {/* Trend */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
      >

        <motion.polyline
          fill="none"
          stroke="#74d8ff"
          strokeWidth="6"
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
          initial={{ pathLength:0 }}
          animate={{ pathLength:1 }}
          transition={{
            duration:6,
            repeat:Infinity,
            repeatType:"reverse"
          }}

        />

      </svg>

    </div>
  );
}