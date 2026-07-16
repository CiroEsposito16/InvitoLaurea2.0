"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  opened: boolean;
  onOpen: () => void;
};

export default function Envelope({ opened, onOpen }: EnvelopeProps) {
  return (
    <motion.div
      onClick={() => !opened && onOpen()}
      className="relative cursor-pointer select-none w-full max-w-[420px] px-4"
      initial={{ opacity: 0, y: 80 }}
      animate={{
        opacity: opened ? 0 : 1,
        y: 0,
        scale: opened ? 0.92 : 1,
      }}
      transition={{ duration: 1 }}
    >
      {/* Ombra */}
      <motion.div
        animate={{ opacity: opened ? 0 : 0.35, scale: opened ? 0.8 : 1 }}
        className="absolute left-1/2 top-[103%] h-10 w-4/5 -translate-x-1/2 rounded-full bg-black blur-2xl"
      />

      {/* Contenitore principale fluido */}
      <motion.div
        animate={{ y: opened ? 0 : [0, -10, 0] }}
        transition={{ duration: 4, repeat: opened ? 0 : Infinity, ease: "easeInOut" }}
        className="relative w-full aspect-[420/280]"
      >
        {/* Corpo principale */}
        <div
          className="absolute inset-0 rounded-md border border-white/20"
          style={{
            background: "linear-gradient(180deg,#15355b 0%,#0d2442 40%,#081221 100%)",
            boxShadow: "0 30px 60px rgba(0,0,0,.45)",
          }}
        />

        {/* Linguetta (usiamo flex/percentuali invece di bordi fissi) */}
        <motion.div
          animate={{ rotateX: opened ? -180 : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          className="absolute left-0 right-0 top-0 z-20 h-1/2"
        >
          <div className="w-full h-full bg-[rgba(255,255,255,0.08)] [clip-path:polygon(0%_0%,100%_0%,50%_100%)]" />
        </motion.div>

        {/* Invito */}
        <motion.div
          animate={{
            y: opened ? -175 : 40,
            scale: opened ? 1.05 : 0.85,
            opacity: opened ? 1 : 0.8,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/4 z-10 h-[60%] w-[80%] -translate-x-1/2 rounded-lg bg-white shadow-2xl"
        />

        {/* Sigillo */}
        <motion.div
          animate={{ scale: opened ? 0 : 1, opacity: opened ? 0 : 1 }}
          transition={{ duration: 0.35 }}
          className="absolute left-1/2 top-[45%] z-30 -translate-x-1/2"
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-b from-white via-[#d8dee8] to-[#9ca6b8]">
            <span className="tracking-widest font-semibold text-[#081221] text-sm md:text-base">
              CE
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}