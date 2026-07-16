"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Background from "../componets/Background";
import Envelope from "../componets/Envelope";
import Invitation from "../componets/Invitation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#081221]">

      <Background />

      <AnimatePresence>

        {showIntro && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            
            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1.5 }}
  className="
    max-w-4xl
    px-8
    text-center
    text-5xl
    md:text-7xl
    font-light
    italic
    tracking-wide
    leading-relaxed
    text-[#D8DEE8]
  "
  style={{
    textShadow:
      "0 0 12px rgba(216,222,232,.18), 0 0 35px rgba(216,222,232,.08)",
  }}
>
  « Diventa ciò che sei »
</motion.h1>
            <motion.p
              className="mt-5 text-white/70 tracking-[0.2em]"
            >
              « Non è stato facile. E' stato mio »
            </motion.p>
          </motion.div>
        )}

      </AnimatePresence>

      {!showIntro && (
        <>
          {/* BUSTA */}
          <motion.div
            animate={{
              opacity: opened ? 0 : 1,
              scale: opened ? 0.88 : 1,
            }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <Envelope
              opened={opened}
              onOpen={() => setOpened(true)}
            />
          </motion.div>

          {/* INVITO */}
          <motion.div
  animate={{
    scale: opened ? 1 : 0.35,
    opacity: opened ? 1 : 0,
  }}
  transition={{
    duration: 1.4,
  }}
>
  <Invitation opened={opened} />
</motion.div>
          
        </>
      )}
    </main>
  );
}