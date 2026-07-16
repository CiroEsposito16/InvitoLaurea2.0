"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  opened: boolean;
  onOpen: () => void;
};

export default function Envelope({
  opened,
  onOpen,
}: EnvelopeProps) {
  return (
    <motion.div
      onClick={() => !opened && onOpen()}
      className="relative cursor-pointer select-none"
      initial={{ opacity: 0, y: 80 }}
      animate={{
        opacity: opened ? 0 : 1,
        y: 0,
        scale: opened ? 0.92 : 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* Ombra */}
      <motion.div
        animate={{
          opacity: opened ? 0 : .35,
          scale: opened ? .8 : 1,
        }}
        className="absolute left-1/2 top-[103%] h-10 w-80 -translate-x-1/2 rounded-full bg-black blur-2xl"
      />

      {/* Corpo */}

      <motion.div
        animate={{
          y: opened ? 0 : [0,-5,0],
        }}
        transition={{
          duration:4,
          repeat: opened ? 0 : Infinity,
          ease:"easeInOut"
        }}
        className="relative h-[280px] w-[420px]"
      >

        {/* Corpo principale */}

        <div
          className="absolute inset-0 rounded-md border border-white/20"
          style={{
            background:
              "linear-gradient(180deg,#15355b 0%,#0d2442 40%,#081221 100%)",
            boxShadow:
              "0 30px 60px rgba(0,0,0,.45)"
          }}
        />

        {/* Texture */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px,white 1px,transparent 0)",
            backgroundSize:"8px 8px"
          }}
        />

        {/* Linguetta */}

        <motion.div
          animate={{
            rotateX: opened ? -180 : 0,
          }}
          transition={{
            duration:.9,
            ease:"easeInOut"
          }}
          style={{
            transformOrigin:"top center",
            transformStyle:"preserve-3d",
          }}
          className="absolute left-0 right-0 top-0 z-20"
        >

          <div
            style={{
              width:0,
              height:0,
              borderLeft:"210px solid transparent",
              borderRight:"210px solid transparent",
              borderTop:"145px solid rgba(255,255,255,.08)",
              margin:"0 auto"
            }}
          />

        </motion.div>

        {/* Invito */}

        <motion.div
          animate={{
            y: opened ? -175 : 40,
            scale: opened ? 1.05 : .85,
            opacity: opened ? 1 : .8,
          }}
          transition={{
            duration:1.2,
            ease:"easeInOut"
          }}
          className="absolute left-1/2 top-[135px] z-10 h-[250px] w-[340px] -translate-x-1/2 rounded-lg bg-white shadow-2xl"
        />

        {/* Sigillo */}

        <motion.div
          animate={{
            scale: opened ? 0 : 1,
            opacity: opened ? 0 : 1,
          }}
          transition={{
            duration:.35
          }}
          className="absolute left-1/2 top-[128px] z-30 -translate-x-1/2"
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle,#ffffff,#d8dee8,#9ca6b8)"
            }}
          >
            <span className="tracking-widest font-semibold text-[#081221]">
              CE
            </span>
          </div>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}