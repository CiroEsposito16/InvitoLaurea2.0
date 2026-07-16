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
    <main className="relative min-h-screen w-full overflow-hidden bg-[#081221]">

      {/* Background */}
      <Background />

      {/* INTRO */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="
                max-w-3xl
                text-3xl
                md:text-6xl
                font-light
                italic
                leading-relaxed
                tracking-wide
                text-[#D8DEE8]
              "
              style={{
                textShadow:
                  "0 0 12px rgba(216,222,232,.18),0 0 35px rgba(216,222,232,.08)",
              }}
            >
              « Diventa ciò che sei »
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-5 text-xs md:text-base tracking-[0.35em] uppercase text-white/60"
            >
              Non è stato facile. È stato mio.
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
              duration: 0.8,
            }}
            className="absolute inset-0 z-20 flex items-center justify-center px-4"
          >
            <Envelope
              opened={opened}
              onOpen={() => setOpened(true)}
            />
          </motion.div>

          {/* INVITO */}

          <Invitation opened={opened} />

        </>
      )}
    </main>
  );
}