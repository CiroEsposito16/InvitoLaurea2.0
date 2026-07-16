"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

type Props = {
  opened: boolean;
};

export default function Invitation({ opened }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: opened ? 1 : 0, scale: opened ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      // Abbiamo rimosso il posizionamento fisso: ora si adatta al div genitore in page.tsx
      className="w-full max-w-[350px] bg-[#07111f] p-6 rounded-3xl border border-[#d4af37]/30 shadow-2xl overflow-y-auto max-h-[90dvh]"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
          Cerimonia di Laurea
        </p>
        <h1 className="text-4xl mt-2 font-serif text-white">Ciro</h1>
        <h2 className="text-lg text-[#d4af37] font-medium tracking-widest">ESPOSITO</h2>
        
        <div className="w-full my-6 border-t border-[#d4af37]/50" />
        
        <GraduationCap size={40} className="text-[#d4af37] mb-3" />
        <p className="text-sm text-white/90">Economia e Management</p>

        <div className="w-full mt-6 space-y-3 text-left">
          <div className="p-4 border border-white/10 rounded-2xl bg-white/5">
            <p className="text-[9px] uppercase tracking-widest text-[#d4af37]">Data</p>
            <p className="text-white mt-1">7 Settembre 2026</p>
          </div>
          <div className="p-4 border border-white/10 rounded-2xl bg-white/5">
            <p className="text-[9px] uppercase tracking-widest text-[#d4af37]">Luogo</p>
            <p className="text-white mt-1">Univ. Studi di Salerno</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}