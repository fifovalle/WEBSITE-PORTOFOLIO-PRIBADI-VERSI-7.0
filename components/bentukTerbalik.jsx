"use client";
import React from "react";
import { animate, motion } from "framer-motion";

const BentukTerbalik = ({ konten, arah, durasi }) => {
  const animasiBerputar = {
    animate: {
      rotate: arah === "kanan" ? 360 : arah === "kiri" ? -360 : 0,
      transition: {
        duration: durasi,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div variants={animasiBerputar} animate="animate">
      {konten}
    </motion.div>
  );
};

export default BentukTerbalik;
