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
      initial={{ opacity: 0, y: 60 }}
      animate={{
        opacity: opened ? 0 : 1,
        y: 0,
        scale: opened ? 0.94 : 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className="
        relative
        mx-auto
        w-[88vw]
        max-w-[360px]
        md:max-w-[430px]
        cursor-pointer
        select-none
      "
    >

      {/* Ombra */}

      <motion.div
        animate={{
          opacity: opened ? 0 : .25,
          scale: opened ? .8 : 1,
        }}
        transition={{ duration: .8 }}
        className="
          absolute
          left-1/2
          top-[104%]
          h-8
          w-4/5
          -translate-x-1/2
          rounded-full
          bg-black/70
          blur-xl
        "
      />

      {/* Corpo */}

      <motion.div
        animate={{
          y: opened ? 0 : [0,-5,0],
        }}
        transition={{
          duration: 6,
          repeat: opened ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          aspect-[430/285]
          w-full
        "
      >

        {/* Sfondo */}

        <div
          className="
            absolute
            inset-0
            rounded-[20px]
            overflow-hidden
          "
          style={{
            background:
              "linear-gradient(180deg,#13253f 0%,#0d1c31 45%,#07111f 100%)",
            boxShadow:
              "0 25px 70px rgba(0,0,0,.45)",
          }}
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            rounded-[20px]
            bg-[radial-gradient(circle_at_top,rgba(212,175,55,.10),transparent_55%)]
          "
        />

        {/* Cornice Esterna */}

        <div
          className="
            absolute
            inset-[8px]
            rounded-[16px]
            border
            border-[#d4af37]/35
          "
        />

        {/* Cornice Interna */}

        <div
          className="
            absolute
            inset-[16px]
            rounded-[12px]
            border
            border-[#d4af37]/15
          "
        />

        {/* Angolo Alto SX */}

        <div className="absolute top-5 left-5 h-10 w-10 rounded-tl-xl border-l border-t border-[#d4af37]/70" />

        {/* Angolo Alto DX */}

        <div className="absolute top-5 right-5 h-10 w-10 rounded-tr-xl border-r border-t border-[#d4af37]/70" />

        {/* Angolo Basso SX */}

        <div className="absolute bottom-5 left-5 h-10 w-10 rounded-bl-xl border-l border-b border-[#d4af37]/70" />

        {/* Angolo Basso DX */}

        <div className="absolute bottom-5 right-5 h-10 w-10 rounded-br-xl border-r border-b border-[#d4af37]/70" />

        {/* Linguetta */}
                <motion.div
          animate={{
            rotateX: opened ? -180 : 0,
          }}
          transition={{
            duration: 1.15,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          }}
          className="
            absolute
            left-0
            right-0
            top-0
            z-20
            h-1/2
          "
        >
          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              [clip-path:polygon(0%_0%,100%_0%,50%_100%)]
              bg-gradient-to-b
              from-[#234067]
              via-[#152a46]
              to-[#0b1628]
              border-b
              border-[#d4af37]/20
            "
          >
            {/* Riflesso */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

            {/* Linea oro */}
            <div className="absolute bottom-0 left-[15%] h-px w-[70%] bg-[#d4af37]/50" />
          </div>
        </motion.div>

        {/* Sigillo */}

        <motion.div
          animate={{
            scale: opened ? 0 : 1,
            opacity: opened ? 0 : 1,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute
            left-1/2
            top-[48%]
            z-30
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <div
            className="
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#f6d77b]
              bg-gradient-to-b
              from-[#f8df93]
              via-[#d4af37]
              to-[#9c7418]
              shadow-[0_0_30px_rgba(212,175,55,.35)]
            "
          >
            <div className="absolute inset-[4px] rounded-full border border-[#fff3c2]/40" />

            <span
              className="
                relative
                text-sm
                font-semibold
                tracking-[0.28em]
                text-[#10213b]
              "
            >
              CE
            </span>
          </div>
        </motion.div>

      </motion.div>

    </motion.div>

  );
}