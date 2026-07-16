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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "10px",
        pointerEvents: opened ? "auto" : "none",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: opened ? 1 : 0, scale: opened ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "350px",
          maxHeight: "90vh",
          backgroundColor: "#07111f",
          borderRadius: "20px",
          border: "1px solid rgba(212, 175, 55, 0.3)",
          overflowY: "auto",
          padding: "20px",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#d4af37" }}>
            CERIMONIA DI LAUREA
          </p>
          <h1 style={{ fontSize: "32px", margin: "10px 0" }}>Ciro</h1>
          <h2 style={{ fontSize: "16px", color: "#d4af37" }}>ESPOSITO</h2>
          
          <div style={{ margin: "20px 0", borderTop: "1px solid #d4af37" }} />
          
          <GraduationCap size={40} style={{ margin: "0 auto", color: "#d4af37" }} />
          <p style={{ marginTop: "10px" }}>Economia e Management</p>

          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid #333", borderRadius: "10px" }}>
              <p style={{ fontSize: "9px", color: "#d4af37" }}>DATA</p>
              <p>7 Settembre 2026</p>
            </div>
            <div style={{ padding: "10px", border: "1px solid #333", borderRadius: "10px" }}>
              <p style={{ fontSize: "9px", color: "#d4af37" }}>LUOGO</p>
              <p>Univ. Studi di Salerno</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}