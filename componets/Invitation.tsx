"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

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
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 pointer-events-none"
    >
      <motion.div
        whileHover={{
          rotateX: 1, // Leggera riduzione rotazione 3d su hover per schermi piccoli
          rotateY: -1,
          scale: 1.005,
        }}
        transition={{ duration: 0.35 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000, // Prospettiva ridotta per adattare meglio
        }}
        className="
          relative
          w-full
          max-w-[380px] 
          h-fit
          max-h-[95vh] 
          overflow-hidden // Nasconde lo scroll, forzando il contenuto a stare dentro
          rounded-[25px]
          border
          border-[#d4af37]/20
          bg-[#07111f]
          shadow-[0_15px_40px_rgba(0,0,0,.5)]
          flex flex-col // Necessario per il layout interno
        "
      >
        {/* Background e Glow (rimangono invariati) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10213c] via-[#091728] to-[#050b14]" />
        <div className="absolute left-1/2 top-[-100px] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[100px]" />

        {/* Luce che attraversa */}
        <motion.div
          animate={{ x: [-300, 500] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute top-0 left-0 h-full w-16 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-lg"
        />

        {/* Cornici e Angoli (semplificati e rimpiccioliti) */}
        <div className="absolute inset-4 rounded-[21px] border border-[#d4af37]/20" />
        <div className="absolute left-6 top-6 h-10 w-10 rounded-tl-lg border-l border-t border-[#d4af37]/40" />
        <div className="absolute right-6 top-6 h-10 w-10 rounded-tr-lg border-r border-t border-[#d4af37]/40" />
        <div className="absolute bottom-6 left-6 h-10 w-10 rounded-bl-lg border-b border-l border-[#d4af37]/40" />
        <div className="absolute bottom-6 right-6 h-10 w-10 rounded-br-lg border-b border-r border-[#d4af37]/40" />

        {/* CONTENUTO PRINCIPALE - Scrollabile internamente se necessario, ma compatto */}
        <div className="relative z-20 px-6 py-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4af37]/20 scrollbar-track-transparent">
          
          {/* Header - Font drasticamente ridotti */}
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
              CERIMONIA DI LAUREA
            </p>
            <h1 className="mt-1.5 text-[40px] leading-none font-light text-transparent bg-gradient-to-b from-[#fff9ec] via-[#edd39b] to-[#d4af37] bg-clip-text">
              Ciro
            </h1>
            <h2 className="mt-0.5 text-[18px] tracking-[0.25em] text-transparent bg-gradient-to-b from-[#fff9ec] via-[#edd39b] to-[#d4af37] bg-clip-text">
              ESPOSITO
            </h2>
          </div>

          <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-[#f0d28a] to-transparent" />

          {/* Corso - Icona e testo rimpiccioliti */}
          <div className="text-center">
            <div className="flex justify-center">
              <GraduationCap size={30} strokeWidth={1.5} className="text-[#d4af37]" />
            </div>
            <p className="mt-2 text-[16px] text-[#f8f3ea]">Economia e Management</p>
          </div>

          <div className="mx-auto my-4 h-px w-16 bg-[#d4af37]/30" />

          {/* INFORMAZIONI - Padding e gap ridotti al minimo */}
          <div className="mt-6 space-y-3">
            {/* DATA */}
            <div className="flex items-center gap-3 rounded-lg border border-[#d4af37]/15 bg-white/[0.02] px-4 py-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">
                <CalendarDays size={18} className="text-[#d4af37]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">DATA</p>
                <p className="text-sm text-[#f8f3ea]">7 Settembre 2026</p>
                <p className="text-[11px] text-white/50">Ore 10:30</p>
              </div>
            </div>

            {/* LUOGO - Link/Card */}
            <a href="..." className="pointer-events-auto flex items-center gap-3 rounded-lg border border-[#d4af37]/15 bg-white/[0.02] px-4 py-2.5 hover:border-[#d4af37]/50 transition">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">
                <MapPin size={18} className="text-[#d4af37]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">LUOGO</p>
                <p className="text-sm leading-tight text-[#f8f3ea]">Univ. Studi di Salerno</p>
                <p className="text-[11px] text-[#d4af37]/80">Apri Maps →</p>
              </div>
            </a>
          </div>

          {/* DIVISORE e FOOTER - Spaziatura ridotta */}
          <div className="mx-auto mt-6 mb-4 h-px w-16 bg-[#d4af37]/20" />
          
          <div className="text-center text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
            Celebriamo insieme
          </div>
          <p className="mt-2 text-xs leading-normal text-white/50">
            Vi aspetto per condividere questo<br/>traguardo speciale.
          </p>

          {/* AZIONI - Bottoni compatti */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="..." className="pointer-events-auto col-span-1 flex items-center justify-center rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-3 text-[10px] uppercase tracking-[0.25em] text-[#f8f3ea] hover:bg-[#d4af37]/15 transition">
              Maps
            </a>
            <button type="button" className="pointer-events-auto col-span-1 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-[10px] uppercase tracking-[0.25em] text-white/70 hover:bg-white/10 transition">
              Calendario
            </button>
          </div>

          {/* FIRMA - Margini azzerati */}
          <div className="mt-8 text-center">
             <p className="text-[#d4af37]/50 text-[9px] tracking-[0.4em] uppercase">07 - 09 - 2026</p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}