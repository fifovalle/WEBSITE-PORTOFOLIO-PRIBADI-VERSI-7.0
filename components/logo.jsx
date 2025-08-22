import React from "react";
import Link from "next/link";

const Logo = ({ cerah = false }) => {
  const warnaKelas = cerah ? "text-white" : "text-utama";

  return (
    <Link href="/" className="font-utama text-2xl tracking-[4px]">
      <span className={warnaKelas}>Naufal FIFA</span>
    </Link>
  );
};

export default Logo;
