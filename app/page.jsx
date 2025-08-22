"use client";
import React, { useEffect } from "react";
// KOMPONEN SAYA
import Beranda from "@/components/beranda";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Perjalanan from "@/components/perjalanan";
import Pekerjaan from "@/components/pekerjaan";
import Kontak from "@/components/Kontak";
import DaftarTetap from "@/components/daftarTetap";
import Testimonial from "@/components/testimonial";
import Kaki from "@/components/kaki";

const Utama = () => {
  useEffect(() => {
    const gulirLokomotif = async () => {
      const lokomotif = (await import("locomotive-scroll")).default;
      new lokomotif();
    };

    gulirLokomotif();
  }, []);

  return (
    <>
      <Beranda />
      <DaftarTetap />
      <Layanan />
      <Tentang />
      <Perjalanan />
      <Pekerjaan />
      <Testimonial />
      <Kontak />
      <Kaki />
    </>
  );
};

export default Utama;
