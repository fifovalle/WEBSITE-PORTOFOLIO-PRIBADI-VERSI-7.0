"use client";
import React from "react";
import { animate, delay, motion } from "framer-motion";

const animasiHuruf = {
  initial: { y: "100%", opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.2, 0, 0.1, 1],
      delay: i[0],
    },
  }),
};

const ambilHuruf = (nama) => {
  let hurufArray = [];
  nama.split("").forEach((karakter, indeks) => {
    hurufArray.push(
      <motion.span
        key={indeks}
        variants={animasiHuruf}
        initial="initial"
        animate="animate"
        custom={[indeks * 0.02, (nama.length - indeks) * 0.01]}
      >
        {karakter}
      </motion.span>
    );
  });

  return hurufArray;
};

const AnimasiTeks = ({ teks, gayaTeks }) => {
  return <div className={`${gayaTeks}`}>{ambilHuruf(teks)}</div>;
};

export default AnimasiTeks;
