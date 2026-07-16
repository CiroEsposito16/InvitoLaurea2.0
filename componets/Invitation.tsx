"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  MapPin,
  CalendarPlus,
} from "lucide-react";

type Props = {
  opened: boolean;
};

export default function Invitation({ opened }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 50 }}
      animate={{
        opacity: opened ? 1 : 0,
        scale: opened ? 1 : 0.82,
        y: opened ? 0 : 50,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="
  w-[78vw]
  max-w-[280px]
  md:w-[340px]
  md:max-w-[340px]
  max-h-[88vh]
  mx-auto
"
     
    >
      <div
        className="
  relative
  overflow-hidden
  rounded-[24px]
  border
  border-[#d4af37]/25
  bg-[#07111f]
  shadow-[0_15px_45px_rgba(0,0,0,.45)]
  max-h-[88vh]
"
      >

        {/* Sfondo */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#122441] via-[#0b1628] to-[#050b14]" />

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-70px]
            h-[150px]
            w-[150px]
            -translate-x-1/2
            rounded-full
            bg-[#d4af37]/10
            blur-[45px]
          "
        />

        {/* Cornice */}

        <div className="absolute inset-3 rounded-[20px] border border-[#d4af37]/25" />

        <div className="absolute inset-6 rounded-[16px] border border-[#d4af37]/10" />

        {/* Angoli */}

        <div className="absolute left-5 top-5 h-8 w-8 rounded-tl-lg border-l border-t border-[#d4af37]/60" />

        <div className="absolute right-5 top-5 h-8 w-8 rounded-tr-lg border-r border-t border-[#d4af37]/60" />

        <div className="absolute bottom-5 left-5 h-8 w-8 rounded-bl-lg border-l border-b border-[#d4af37]/60" />

        <div className="absolute bottom-5 right-5 h-8 w-8 rounded-br-lg border-r border-b border-[#d4af37]/60" />

        {/* Contenuto */}

        <div className="relative z-20 px-5 py-6">

          <p className="text-center text-[9px] uppercase tracking-[0.55em] text-[#d4af37]">
            Cerimonia di Laurea
          </p>

          <h1
            className="
              mt-4
              text-center
              text-4xl
              md:text-5xl
              font-light
              leading-none
              text-transparent
              bg-gradient-to-b
              from-[#fff8ec]
              via-[#f2d78f]
              to-[#d4af37]
              bg-clip-text
            "
          >
            Ciro
          </h1>

          <h2
            className="
              mt-2
              text-center
              text-base
              md:text-lg
              tracking-[0.45em]
              text-[#d4af37]
            "
          >
            ESPOSITO
          </h2>

          <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="flex justify-center">
            <GraduationCap
              size={28}
              strokeWidth={1.5}
              className="text-[#d4af37]"
            />
          </div>

          <p className="mt-3 text-center text-base text-[#f7f2e8]">
            Economia e Management
          </p>

          <div className="mx-auto my-5 h-px w-16 bg-[#d4af37]/30" />
                    {/* INFORMAZIONI */}

          <div className="space-y-3">

            {/* DATA */}

            <div
              className="
                rounded-xl
                border
                border-[#d4af37]/20
                bg-white/[0.03]
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/10">

                  <CalendarDays
                    size={16}
                    className="text-[#d4af37]"
                  />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                    DATA
                  </p>

                  <p className="mt-1 text-sm text-[#f7f2e8]">
                    7 Settembre 2026
                  </p>

                  <p className="text-xs text-white/60">
                    Ore 10:30
                  </p>

                </div>

              </div>

            </div>

            {/* LUOGO */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                rounded-xl
                border
                border-[#d4af37]/20
                bg-white/[0.03]
                px-4
                py-3
                transition-all
                duration-300
                hover:border-[#d4af37]/60
              "
            >
              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/10">

                  <MapPin
                    size={16}
                    className="text-[#d4af37]"
                  />

                </div>

                <div className="flex-1">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                    LUOGO
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-[#f7f2e8]">
                    Università degli Studi
                    <br />
                    di Salerno
                  </p>

                  <p className="mt-2 text-[11px] text-[#d4af37]">
                    Apri su Google Maps →
                  </p>

                </div>

              </div>

            </a>

          </div>

          <div className="mx-auto my-5 h-px w-16 bg-[#d4af37]/30" />
                    {/* AZIONI */}

          <div className="space-y-2.5">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#d4af37]/25
                bg-[#d4af37]/10
                px-4
                py-2.5
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-[#f8f3ea]
                transition-all
                duration-300
                hover:bg-[#d4af37]/20
                hover:border-[#d4af37]/60
              "
            >
              <MapPin size={16} />
              Google Maps
            </a>

            <button
              type="button"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-2.5
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-white/80
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <CalendarPlus size={16} />
              Aggiungi al Calendario
            </button>

          </div>

          {/* FOOTER */}

          <div className="mt-6 text-center">

            <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

            <p className="mt-4 text-[9px] uppercase tracking-[0.40em] text-[#d4af37]/80">
              Un traguardo.
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.40em] text-[#d4af37]/80">
              Un nuovo inizio.
            </p>

            <p className="mt-5 text-[10px] tracking-[0.35em] text-white/45">
              07 • 09 • 2026
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  );
}