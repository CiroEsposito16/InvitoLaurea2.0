"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

type Props = {
  opened: boolean;
};

export default function Invitation({ opened }: Props) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: opened ? 1 : 0,
        scale: opened ? 1 : 0.82,
        y: opened ? 0 : 120,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-10 pointer-events-none"
    >
      <motion.div
        whileHover={{
          rotateX: 2,
          rotateY: -2,
          scale: 1.015,
        }}
        transition={{ duration: 0.35 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 2000,
        }}
        className="
  relative
  w-[92vw]
  max-w-[460px]
  md:max-w-[520px]
  min-h-[650px]
  md:min-h-[760px]
  overflow-hidden
  rounded-[30px]
  border
  border-[#d4af37]/20
  bg-[#07111f]
  shadow-[0_20px_60px_rgba(0,0,0,.45)]
"
        
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10213c] via-[#091728] to-[#050b14]" />

        {/* Glow principale */}
        <motion.div
          animate={{
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-[-120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[130px]"
        />

        {/* Luce che attraversa */}
        <motion.div
          animate={{
            x: [-450, 650],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            left-0
            h-full
            w-24
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            blur-xl
          "
        />

        {/* Doppia cornice */}
        <div className="absolute inset-5 rounded-[28px] border border-[#d4af37]/30" />
        <div className="absolute inset-8 rounded-[22px] border border-[#d4af37]/10" />

        {/* Angoli */}
        <div className="absolute left-8 top-8 h-14 w-14 rounded-tl-xl border-l border-t border-[#d4af37]/60" />
        <div className="absolute right-8 top-8 h-14 w-14 rounded-tr-xl border-r border-t border-[#d4af37]/60" />
        <div className="absolute bottom-8 left-8 h-14 w-14 rounded-bl-xl border-b border-l border-[#d4af37]/60" />
        <div className="absolute bottom-8 right-8 h-14 w-14 rounded-br-xl border-b border-r border-[#d4af37]/60" />

        {/* CONTENUTO */}
        <div className="relative z-20 px-8 py-10">

          {/* Header */}

          <div className="text-center">

            <p className="text-[12px] uppercase tracking-[0.65em] text-[#d4af37]">
              CERIMONIA DI LAUREA
            </p>

            <h1
              className="
                mt-6
                text-[62px]
                leading-none
                font-light
                text-transparent
                bg-gradient-to-b
                from-[#fff9ec]
                via-[#edd39b]
                to-[#d4af37]
                bg-clip-text
              "
            >
              Ciro
            </h1>

            <h2
              className="
                mt-3
                text-[26px]
                tracking-[0.42em]
                text-transparent
                bg-gradient-to-b
                from-[#fff9ec]
                via-[#edd39b]
                to-[#d4af37]
                bg-clip-text
              "
            >
              ESPOSITO
            </h2>

          </div>

          <div className="mx-auto my-7 h-px w-36 bg-gradient-to-r from-transparent via-[#f0d28a] to-transparent" />

          {/* Corso */}

          <div className="text-center">

            <div className="flex justify-center">

              <GraduationCap
                size={46}
                strokeWidth={1.5}
                className="text-[#d4af37]"
              />

            </div>

            <p className="mt-5 text-[24px] text-[#f8f3ea]">
              Economia e Management
            </p>

          </div>

          <div className="mx-auto my-7 h-px w-24 bg-[#d4af37]/40" />
                    {/* INFORMAZIONI */}

          <div className="mt-8 space-y-5">

            {/* DATA */}

            <div
              className="
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-[#d4af37]/20
                bg-white/[0.03]
                px-6
                py-5
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#d4af37]/60
                hover:bg-white/[0.05]
              "
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10">

                <CalendarDays
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#d4af37]"
                />

              </div>

              <div className="flex-1">

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]">
                  DATA
                </p>

                <p className="mt-1 text-lg text-[#f8f3ea]">
                  7 Settembre 2026
                </p>

                <p className="text-sm text-white/50">
                  Ore 10:30
                </p>

              </div>

            </div>

            {/* LUOGO */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno"
              target="_blank"
              rel="noopener noreferrer"
              className="
                pointer-events-auto
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-[#d4af37]/20
                bg-white/[0.03]
                px-6
                py-5
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#d4af37]
                hover:bg-white/[0.05]
                hover:shadow-[0_0_35px_rgba(212,175,55,.15)]
              "
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10">

                <MapPin
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#d4af37]"
                />

              </div>

              <div className="flex-1">

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]">
                  LUOGO
                </p>

                <p className="mt-1 text-lg leading-relaxed text-[#f8f3ea]">
                  Università degli Studi
                  <br />
                  di Salerno
                </p>

                <p className="mt-3 text-sm text-[#d4af37]">
                  Apri su Google Maps →
                </p>

              </div>

            </a>

          </div>

          {/* DIVISORE */}

          <div className="mx-auto mt-10 h-px w-24 bg-[#d4af37]/30" />
                    {/* FOOTER */}

          <div className="mt-10 text-center">

            <p className="text-[11px] uppercase tracking-[0.45em] text-[#d4af37]">
              Celebriamo insieme questo traguardo
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Sarà un piacere condividere con voi
              <br />
              questo momento speciale.
            </p>

          </div>

          {/* AZIONI */}

          <div className="mt-10 space-y-4">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno"
              target="_blank"
              rel="noopener noreferrer"
              className="
                pointer-events-auto
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-[#d4af37]/30
                bg-[#d4af37]/10
                px-6
                py-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#f8f3ea]
                transition-all
                duration-300
                hover:bg-[#d4af37]/20
                hover:border-[#d4af37]/70
              "
            >
              Apri Google Maps
            </a>

            <button
              type="button"
              className="
                pointer-events-auto
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-6
                py-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-white/80
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Aggiungi al Calendario
            </button>

          </div>

          {/* FIRMA */}

          <div className="mt-12 text-center">

            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

            <p className="mt-6 text-[#d4af37]/70 text-xs tracking-[0.45em] uppercase">
              07 - 09 - 2026
            </p>

          </div>

        </div>
              </motion.div>
    </motion.div>
  );
}