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
      initial={{ opacity: 0, scale: 0.82, y: 40 }}
      animate={{
        opacity: opened ? 1 : 0,
        scale: opened ? 1 : 0.82,
        y: opened ? 0 : 40,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className="
        w-[80vw]
        max-w-[270px]
        md:w-[330px]
        md:max-w-[330px]
        mx-auto
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[22px]
          border
          border-[#d4af37]/20
          bg-[#07111f]
          shadow-[0_18px_45px_rgba(0,0,0,.45)]
        "
      >
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#122441] via-[#0c1830] to-[#07111f]" />

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-60px]
            h-[120px]
            w-[120px]
            -translate-x-1/2
            rounded-full
            bg-[#d4af37]/10
            blur-[35px]
          "
        />

        {/* Cornici */}

        <div className="absolute inset-3 rounded-[18px] border border-[#d4af37]/25" />

        <div className="absolute inset-5 rounded-[15px] border border-[#d4af37]/10" />

        {/* Angoli */}

        <div className="absolute top-4 left-4 h-8 w-8 border-l border-t border-[#d4af37]/60 rounded-tl-lg" />

        <div className="absolute top-4 right-4 h-8 w-8 border-r border-t border-[#d4af37]/60 rounded-tr-lg" />

        <div className="absolute bottom-4 left-4 h-8 w-8 border-l border-b border-[#d4af37]/60 rounded-bl-lg" />

        <div className="absolute bottom-4 right-4 h-8 w-8 border-r border-b border-[#d4af37]/60 rounded-br-lg" />

        {/* CONTENUTO */}

        <div className="relative z-20 px-4 py-4">

          <p className="text-center text-[8px] uppercase tracking-[0.55em] text-[#d4af37]">
            Cerimonia di Laurea
          </p>

          <h1 className="mt-3 text-center text-4xl font-light leading-none text-transparent bg-gradient-to-b from-[#fff8ec] via-[#f2d78f] to-[#d4af37] bg-clip-text">
            Ciro
          </h1>

          <h2 className="mt-1 text-center text-[15px] tracking-[0.42em] text-[#d4af37]">
            ESPOSITO
          </h2>

          <div className="mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="flex justify-center">
            <GraduationCap
              size={24}
              strokeWidth={1.5}
              className="text-[#d4af37]"
            />
          </div>

          <p className="mt-2 text-center text-[15px] text-[#f7f2e8]">
            Economia e Management
          </p>

          <div className="mx-auto my-3 h-px w-16 bg-[#d4af37]/30" />
                    {/* INFORMAZIONI */}

          <div className="space-y-2">

            {/* DATA */}

            <div
              className="
                rounded-xl
                border
                border-[#d4af37]/20
                bg-white/[0.03]
                px-3
                py-2.5
              "
            >
              <div className="flex items-center gap-2.5">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4af37]/10">

                  <CalendarDays
                    size={14}
                    className="text-[#d4af37]"
                  />

                </div>

                <div>

                  <p className="text-[8px] uppercase tracking-[0.30em] text-[#d4af37]">
                    DATA
                  </p>

                  <p className="mt-0.5 text-[13px] text-[#f7f2e8]">
                    7 Settembre 2026
                  </p>

                  <p className="text-[11px] text-white/60">
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
                px-3
                py-2.5
                transition-all
                duration-300
                hover:border-[#d4af37]/60
              "
            >
              <div className="flex items-center gap-2.5">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4af37]/10">

                  <MapPin
                    size={14}
                    className="text-[#d4af37]"
                  />

                </div>

                <div className="flex-1">

                  <p className="text-[8px] uppercase tracking-[0.30em] text-[#d4af37]">
                    LUOGO
                  </p>

                  <p className="mt-0.5 text-[13px] leading-snug text-[#f7f2e8]">
                    Università degli Studi
                    <br />
                    di Salerno
                  </p>

                  <p className="mt-1 text-[10px] text-[#d4af37]">
                    Apri su Google Maps →
                  </p>

                </div>

              </div>

            </a>

          </div>

          <div className="mx-auto my-3 h-px w-16 bg-[#d4af37]/30" />
                    {/* AZIONI */}

          <div className="grid grid-cols-2 gap-2">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                border-[#d4af37]/25
                bg-[#d4af37]/10
                px-2
                py-2
                text-[10px]
                font-medium
                text-[#f8f3ea]
                transition-all
                duration-300
                hover:bg-[#d4af37]/20
              "
            >
              <MapPin size={14} />
              Maps
            </a>

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-2
                py-2
                text-[10px]
                font-medium
                text-white/80
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <CalendarPlus size={14} />
              Calendario
            </button>

          </div>

          {/* FOOTER */}

          <div className="mt-4 text-center">

            <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

            <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-[#d4af37]/80">
              Un traguardo.
            </p>

            <p className="text-[8px] uppercase tracking-[0.35em] text-[#d4af37]/80">
              Un nuovo inizio.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.30em] text-white/45">
              07 • 09 • 2026
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  );
}