import React from "react";
import CountUp from "react-countup";

const KontenStatus = ({ teks, jumlah, deskripsi }) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <div className="font-utama text-utama text-4xl xl:text-5xl leading-none">
        <CountUp end={jumlah} delay={1} duration={4} />
        <span>{teks}</span>
      </div>
      <p className="text-sm">{deskripsi}</p>
    </div>
  );
};

export default KontenStatus;
