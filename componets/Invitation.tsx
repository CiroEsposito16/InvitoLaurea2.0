"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

type Props = {
  opened: boolean;
};

export default function Invitation({ opened }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
        className="
          pointer-events-auto
          relative
          w-full
          max-w-[380px]
          max-h-[90vh]
          overflow-y-auto
          rounded-[25px]
          border
          border-[#d4af37]/20
          bg-[#07111f]
          shadow-[0_20px_60px_rgba(0,0,0,.6)]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10213c] via-[#091728] to-[#050b14]" />
        
        {/* Glow */}
        <div className="absolute left-1/2 top-[-50px] h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[80px]" />

        {/* Contenuto */}
        <div className="relative z-20 px-6 py-8">
          
          {/* Header */}
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">CERIMONIA DI LAUREA</p>
            <h1 className="mt-2 text-[42px] leading-none font-light text-transparent bg-gradient-to-b from-[#fff9ec] via-[#edd39b] to-[#d4af37] bg-clip-text">
              Ciro
            </h1>
            <h2 className="mt-1 text-[18px] tracking-[0.25em] text-transparent bg-gradient-to-b from-[#fff9ec] via-[#edd39b] to-[#d4af37] bg-clip-text">
              ESPOSITO
            </h2>
          </div>

          <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-transparent via-[#f0d28a] to-transparent" />

          {/* Corso */}
          <div className="text-center">
            <GraduationCap size={32} strokeWidth={1.5} className="mx-auto text-[#d4af37]" />
            <p className="mt-3 text-[16px] text-[#f8f3ea]">Economia e Management</p>
          </div>

          {/* Informazioni */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-[#d4af37]/20 bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">
                <CalendarDays size={20} className="text-[#d4af37]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">DATA</p>
                <p className="text-sm text-[#f8f3ea]">7 Settembre 2026</p>
              </div>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-[#d4af37]/20 bg-white/[0.03] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">
                <MapPin size={20} className="text-[#d4af37]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">LUOGO</p>
                <p className="text-sm text-[#f8f3ea]">Univ. Studi di Salerno</p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Celebriamo insieme</p>
            <p className="mt-2 text-xs text-white/50">Sarà un piacere avervi con me.</p>
          </div>

          {/* Azioni */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <a href="https://www.google.com/maps/search/?api=1&query=Università+degli+Studi+di+Salerno" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/10 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f8f3ea]">
              Maps
            </a>
            <button type="button" className="rounded-lg border border-white/10 bg-white/5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/80">
              Calendario
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}