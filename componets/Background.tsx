"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    // 'fixed' invece di 'absolute' assicura che lo sfondo resti fermo
    // 'inset-0' copre l'intera area
    <div className="fixed inset-0 overflow-hidden bg-[#081221] z-0">

      {/* Glow - ridotto su mobile per non dominare troppo */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] md:h-[900px] md:w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px] md:blur-[180px]" />

      {/* Grid - usiamo 'preserveAspectRatio="xMidYMid slice"' per adattarsi meglio */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" stroke="#6ecbff" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Cerchi HUD - ridotti per mobile */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute left-1/2 bottom-[-200px] md:bottom-[-450px] h-[600px] w-[600px] md:h-[1200px] md:w-[1200px] -translate-x-1/2 rounded-full border border-cyan-300/10"
      />

      {/* Barre economiche - nascoste su schermi troppo piccoli se necessario, 
          o ridotte con 'scale' */}
      <div className="absolute bottom-0 left-0 flex w-full items-end justify-center gap-2 md:gap-4 opacity-20">
        {[120,180,220,260,340,280,420,480,560,510,620].map((h,i)=>(
          <motion.div
            key={i}
            animate={{ height: [h * 0.5, h * 0.7, h * 0.5] }} // Scala proporzionale
            transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            className="w-3 md:w-6 rounded-t bg-cyan-300"
          />
        ))}
      </div>

      {/* Trend - SVG adattabile */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <motion.polyline
          fill="none"
          stroke="#74d8ff"
          strokeWidth="4"
          points="0,760 140,720 300,690 450,640 620,610 780,520 940,560 1110,450 1290,380 1480,300 1660,260 1920,120"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
}